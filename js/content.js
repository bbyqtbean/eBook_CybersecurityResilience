/* ============================================
   Content Data — Zone mappings for depth navigation
   ============================================ */

// Zone mapping for labels
const ZONE_MAP = {
  surface: { label: 'Surface · 0m', slides: [1,2,3,4,5] },
  shallows: { label: 'Shallows · 10m', slides: [6,7,8,9,10,11] },
  reef: { label: 'Reef Zone · 30m', slides: [12,13,14,15,16,17] },
  twilight: { label: 'Twilight Zone · 60m', slides: [18,19,20,21,22,23,24,25] },
  abyss: { label: 'The Abyss · 100m', slides: [26,27,28,29,30,31,32,33,34,35] },
  seabed: { label: 'The Seabed', slides: [] }
};

function getZoneForSlide(slideNum) {
  for (const [zone, data] of Object.entries(ZONE_MAP)) {
    if (data.slides.includes(slideNum)) return zone;
  }
  return 'seabed';
}

function getZoneLabelForSlide(slideNum) {
  const zone = getZoneForSlide(slideNum);
  return ZONE_MAP[zone]?.label || 'Unknown';
}

// Chapter mapping for form submissions
const CHAPTER_MAP = [
  { chapter: 1, title: 'Introduction', slides: [1,2,3,4,5] },
  { chapter: 2, title: 'Preventable Threats', slides: [6,7,8,9,10,11] },
  { chapter: 3, title: 'Largely Preventable', slides: [12,13,14,15,16,17] },
  { chapter: 4, title: 'Difficult to Prevent', slides: [18,19,20,21,22,23,24,25] },
  { chapter: 5, title: 'Mindset Shifts', slides: [26,27,28,29,30,31,32,33,34,35] }
];

function getChapterForSlide(slideNum) {
  for (const ch of CHAPTER_MAP) {
    if (ch.slides.includes(slideNum)) return `Chapter ${ch.chapter}: ${ch.title}`;
  }
  return 'Unknown';
}
