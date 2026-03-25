#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SKILL_DIR = '.claude/skills/make-slide';
const GALLERY_URL = 'https://make-slide.vercel.app';

const THEMES = [
  { id: 'minimal-dark',   style: 'Clean dark, white typography',        bestFor: 'Tech talks, developer conferences' },
  { id: 'minimal-light',  style: 'Bright white, Apple-inspired',        bestFor: 'General, corporate, academic' },
  { id: 'corporate',      style: 'Navy & gold, professional layout',    bestFor: 'Business, investor meetings' },
  { id: 'gradient-pop',   style: 'Purple-pink gradients, glassmorphism',bestFor: 'Startup pitches, marketing' },
  { id: 'neon-terminal',  style: 'Terminal dark, neon green/cyan',      bestFor: 'Hackathons, security, CTF' },
  { id: 'paper',          style: 'Kraft paper, serif, terracotta',      bestFor: 'Education, workshops, research' },
  { id: 'keynote-apple',  style: 'Dramatic dark, Apple keynote',        bestFor: 'Product launches, keynotes' },
  { id: 'magazine',       style: 'Editorial, asymmetric, dramatic',     bestFor: 'Design, portfolio, branding' },
  { id: 'data-focus',     style: 'Dashboard aesthetics, data-centric',  bestFor: 'Analytics, KPIs, financial' },
  { id: 'playful',        style: 'Pastel colors, bouncy animations',    bestFor: 'Workshops, casual talks, retros' },
];

const INJECT_TEXT = `

## /make-slide
When the user types "/make-slide", read \`.claude/skills/make-slide/SKILL.md\` and follow the presentation creation workflow. Browse themes at ${GALLERY_URL}
`;

// ── Helpers ──

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function openUrl(url) {
  const platform = process.platform;
  try {
    if (platform === 'darwin') execSync(`open "${url}"`);
    else if (platform === 'win32') execSync(`start "" "${url}"`);
    else execSync(`xdg-open "${url}"`);
  } catch {
    console.log(`Open manually: ${url}`);
  }
}

function padEnd(str, len) {
  return str.length >= len ? str : str + ' '.repeat(len - str.length);
}

// ── Commands ──

function cmdInit() {
  const cwd = process.cwd();

  // Find the source skill directory (bundled with the package)
  const packageRoot = path.resolve(__dirname, '..');
  const srcSkill = path.join(packageRoot, SKILL_DIR);

  if (!fs.existsSync(srcSkill)) {
    console.error('❌ Skill template not found. Reinstall with: npx make-slide init');
    process.exit(1);
  }

  const destSkill = path.join(cwd, SKILL_DIR);

  // Copy skill files
  console.log('📁 Copying skill files...');
  copyDirSync(srcSkill, destSkill);
  console.log(`   ✅ ${SKILL_DIR}/`);

  // Auto-detect and inject into AI config files
  const configFiles = ['CLAUDE.md', 'AGENTS.md', 'GEMINI.md', '.cursorrules'];
  let injected = false;

  for (const file of configFiles) {
    const filePath = path.join(cwd, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.includes('/make-slide')) {
        console.log(`   ⏭️  ${file} already has /make-slide reference`);
      } else {
        fs.appendFileSync(filePath, INJECT_TEXT);
        console.log(`   ✅ Injected /make-slide into ${file}`);
      }
      injected = true;
    }
  }

  if (!injected) {
    console.log('');
    console.log('💡 No AI config file found (CLAUDE.md, AGENTS.md, GEMINI.md, .cursorrules).');
    console.log('   To use with your AI tool, add this to your config file:');
    console.log('');
    console.log('   ## /make-slide');
    console.log('   When the user types "/make-slide", read `.claude/skills/make-slide/SKILL.md`');
    console.log('   and follow the presentation creation workflow.');
  }

  console.log('');
  console.log('🎉 make-slide installed successfully!');
  console.log('');
  console.log('Next steps:');
  console.log('  1. Type /make-slide in Claude Code to create a presentation');
  console.log(`  2. Browse themes: ${GALLERY_URL}`);
  console.log('  3. Run: npx make-slide themes');
}

function cmdThemes() {
  console.log('');
  console.log('🎨 make-slide themes');
  console.log('═'.repeat(80));
  console.log('');
  console.log(`  ${padEnd('#', 4)} ${padEnd('Theme', 18)} ${padEnd('Style', 40)} Best For`);
  console.log(`  ${'-'.repeat(4)} ${'-'.repeat(18)} ${'-'.repeat(40)} ${'-'.repeat(30)}`);

  THEMES.forEach((t, i) => {
    const num = String(i + 1).padStart(2, ' ');
    console.log(`  ${padEnd(num, 4)} ${padEnd(t.id, 18)} ${padEnd(t.style, 40)} ${t.bestFor}`);
  });

  console.log('');
  console.log(`  🌐 Gallery: ${GALLERY_URL}`);
  console.log('');
}

function cmdGallery() {
  console.log(`🌐 Opening theme gallery: ${GALLERY_URL}`);
  openUrl(GALLERY_URL);
}

function cmdHelp() {
  console.log('');
  console.log('🎯 make-slide — AI presentation skill');
  console.log('');
  console.log('Commands:');
  console.log('  npx make-slide init      Install skill into current project');
  console.log('  npx make-slide themes    Show available themes');
  console.log('  npx make-slide gallery   Open theme gallery in browser');
  console.log('  npx make-slide help      Show this help');
  console.log('');
  console.log(`Gallery: ${GALLERY_URL}`);
  console.log('GitHub:  https://github.com/Kuneosu/make-slide');
  console.log('');
}

// ── Main ──

const command = process.argv[2] || 'help';

switch (command) {
  case 'init':    cmdInit(); break;
  case 'themes':  cmdThemes(); break;
  case 'gallery': cmdGallery(); break;
  case 'help':
  case '--help':
  case '-h':      cmdHelp(); break;
  default:
    console.error(`Unknown command: ${command}`);
    cmdHelp();
    process.exit(1);
}
