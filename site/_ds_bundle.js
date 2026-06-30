/* @ds-bundle: {"format":3,"namespace":"PabloUrrutiaGridAwarePortfolioDS_6b21cb","components":[{"name":"TimelineItem","sourcePath":"components/bio/TimelineItem.jsx"},{"name":"GridAwareLockup","sourcePath":"components/brand/GridAwareLockup.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CircleButton","sourcePath":"components/core/CircleButton.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/editorial/Callout.jsx"},{"name":"DashedDivider","sourcePath":"components/editorial/DashedDivider.jsx"},{"name":"DeviceMockup","sourcePath":"components/editorial/DeviceMockup.jsx"},{"name":"PageTitle","sourcePath":"components/editorial/PageTitle.jsx"},{"name":"SectionMarker","sourcePath":"components/editorial/SectionMarker.jsx"}],"sourceHashes":{"components/bio/TimelineItem.jsx":"82fde4b30943","components/brand/GridAwareLockup.jsx":"dcc07ee114d0","components/core/Button.jsx":"691b823e7330","components/core/CircleButton.jsx":"eb002223c20d","components/core/Eyebrow.jsx":"ec32e464dd3f","components/core/Tag.jsx":"3b6230a98862","components/editorial/Callout.jsx":"a796ffc40f32","components/editorial/DashedDivider.jsx":"ea042ddd5e83","components/editorial/DeviceMockup.jsx":"e5a078868b78","components/editorial/PageTitle.jsx":"785d7245b0ab","components/editorial/SectionMarker.jsx":"da7ab2fbe001","ui_kits/portfolio/CaseStudy.jsx":"9392c493df1a","ui_kits/portfolio/Shell.jsx":"b713135fc69b","ui_kits/portfolio/data.js":"ec9445a3ff7c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PabloUrrutiaGridAwarePortfolioDS_6b21cb = window.PabloUrrutiaGridAwarePortfolioDS_6b21cb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/bio/TimelineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TimelineItem — one block in the Bio & Education timeline. A filled block
 * (deep blue for study, deep ember for work, warm grey for background) with a
 * bright accent left edge, a bold title and a small org sub-label. Block
 * height is driven by `span` so duration reads visually, exactly like the
 * source timeline. Optional `year` renders in a left gutter rail.
 */
function TimelineItem({
  title,
  org,
  category = 'work',
  // 'study' | 'work' | 'neutral'
  year,
  span = 1,
  // vertical weight ~ years; 1 unit ≈ 64px
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const cat = {
    study: {
      fill: 'var(--cat-study)',
      edge: 'var(--blue)'
    },
    work: {
      fill: 'var(--cat-work)',
      edge: 'var(--orange)'
    },
    neutral: {
      fill: 'var(--cat-neutral)',
      edge: 'var(--grey-500)'
    }
  }[category];
  const block = /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      flex: 1,
      minHeight: Math.max(56, span * 64),
      background: cat.fill,
      borderLeft: `4px solid ${cat.edge}`,
      padding: '16px 18px',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover || active ? `inset 0 0 0 1px ${cat.edge}` : 'none',
      transition: 'box-shadow 140ms ease, filter 140ms ease',
      filter: hover ? 'brightness(1.18)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--cream)',
      letterSpacing: '-0.01em',
      lineHeight: 1.15
    }
  }, title), org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'rgba(255,255,255,0.62)',
      marginTop: 6,
      letterSpacing: '0.02em'
    }
  }, org));
  if (year == null) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        ...style
      }
    }, rest), block);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 46px',
      textAlign: 'right',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--cream)',
      paddingTop: 2
    }
  }, year), block);
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/bio/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// components/brand/GridAwareLockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GridAwareLockup — the "Grid-Aware / Version" terminal badge that marks the
 * consumption-aware (low-energy) read at the foot of a screen. A hairline box
 * with two lines of Departure Mono pixel type and an optional Atomic-Orange
 * bolt-over-globe mark. Pure CSS + the Departure Mono pixel face, so it is
 * fully portable (no image dependency).
 */
function GridAwareLockup({
  line1 = 'Grid-Aware',
  line2 = 'Version',
  surface = 'dark',
  // 'dark' | 'light'
  bolt = true,
  scale = 1,
  style,
  ...rest
}) {
  const fg = surface === 'dark' ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 18 * scale,
      border: `${2 * scale}px solid ${fg}`,
      padding: `${10 * scale}px ${16 * scale}px`,
      borderRadius: 2,
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      color: fg,
      fontSize: 34 * scale,
      lineHeight: 0.92,
      letterSpacing: '0.02em'
    }
  }, line1, /*#__PURE__*/React.createElement("br", null), line2), bolt && /*#__PURE__*/React.createElement("svg", {
    width: 34 * scale,
    height: 38 * scale,
    viewBox: "0 0 34 38",
    fill: "none",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "17",
    cy: "26",
    rx: "11",
    ry: "11",
    stroke: fg,
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 15v22M6 26h22M9 19c4 4 12 4 16 0M9 33c4-4 12-4 16 0",
    stroke: fg,
    strokeWidth: "1.1",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 2l-9 13h6l-3 11 11-15h-6l5-9z",
    fill: "var(--accent)"
  })));
}
Object.assign(__ds_scope, { GridAwareLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GridAwareLockup.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the portfolio's primary action.
 * `orange` is the Atomic-Orange pill (primary CTA); `dark` is an ink pill;
 * `outline` is an orange ghost; `link` is the inline "Discover →" affordance.
 */
function Button({
  children,
  tone = 'orange',
  // 'orange' | 'dark' | 'outline' | 'link'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  trailingArrow = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    sm: '10px 16px',
    md: '13px 22px',
    lg: '16px 30px'
  };
  const fontSizes = {
    sm: 14,
    md: 15,
    lg: 17
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: fontSizes[size],
    letterSpacing: '-0.01em',
    lineHeight: 1,
    padding: pads[size],
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background 140ms ease, transform 120ms ease, box-shadow 140ms ease, color 140ms ease',
    transform: hover && !disabled ? 'translateY(-1px)' : 'none',
    whiteSpace: 'nowrap'
  };
  const tones = {
    orange: {
      background: hover ? 'var(--orange-600)' : 'var(--orange)',
      color: 'var(--on-accent)',
      boxShadow: hover ? 'var(--glow-accent-on)' : 'none'
    },
    dark: {
      background: hover ? 'var(--charcoal-2)' : 'var(--ink)',
      color: 'var(--cream)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--orange)',
      borderColor: 'var(--orange)',
      boxShadow: hover ? 'var(--glow-accent-on)' : 'none'
    },
    link: {
      background: 'transparent',
      color: 'currentColor',
      padding: 0,
      borderRadius: 0,
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: 4
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...tones[tone],
      ...style
    }
  }, rest), children, trailingArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: '1.1em',
      lineHeight: 0,
      transform: hover ? 'translateX(2px)' : 'none',
      transition: 'transform 120ms ease'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CircleButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CircleButton — the round nav control. Two canonical uses:
 *  - "back" → Atomic-Orange (or dark) circle with a ← arrow
 *  - "close" → solid dark circle with an ✕ (closes a case-study overlay)
 * Glyphs are drawn with inline SVG so stroke weight matches the source.
 */
function CircleButton({
  icon = 'back',
  // 'back' | 'close' | 'forward'
  tone = 'orange',
  // 'orange' | 'black' | 'white'
  size = 56,
  label,
  // optional text shown to the right (e.g. "Back")
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const fills = {
    orange: {
      bg: 'var(--orange)',
      fg: 'var(--on-accent)'
    },
    black: {
      bg: 'var(--ink)',
      fg: 'var(--cream)'
    },
    white: {
      bg: 'var(--cream)',
      fg: 'var(--ink)'
    }
  }[tone];
  const stroke = fills.fg;
  const s = size * 0.42;
  const glyph = {
    back: /*#__PURE__*/React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: stroke,
      strokeWidth: "2.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M19 12H5M5 12l7-7M5 12l7 7"
    })),
    forward: /*#__PURE__*/React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: stroke,
      strokeWidth: "2.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M19 12l-7-7M19 12l-7 7"
    })),
    close: /*#__PURE__*/React.createElement("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: stroke,
      strokeWidth: "2.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6L6 18"
    }))
  }[icon];
  const circle = /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '999px',
      background: fills.bg,
      color: fills.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 120ms ease, box-shadow 140ms ease',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      boxShadow: hover && tone === 'orange' ? 'var(--glow-accent-on)' : 'none',
      flex: '0 0 auto'
    }
  }, glyph);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || icon,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      ...style
    }
  }, rest), circle, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: tone === 'orange' ? 'var(--orange)' : 'currentColor',
      letterSpacing: '-0.01em'
    }
  }, label));
}
Object.assign(__ds_scope, { CircleButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CircleButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — a small mono uppercase label. Used for instructional micro-copy
 * ("Click the boxes to see more") and section eyebrows. Optional leading
 * star/marker echoes the orange "✳" the portfolio uses.
 */
function Eyebrow({
  children,
  marker = false,
  tone = 'ink',
  style,
  ...rest
}) {
  const color = tone === 'orange' ? 'var(--orange)' : tone === 'cream' || tone === 'white' ? 'var(--cream)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), marker && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: 'var(--orange)',
      fontSize: '1.1em',
      lineHeight: 0
    }
  }, "\u2733"), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a pill chip. `outline`/`solid` use Atomic Orange; `blue` is the
 * clear-blue secondary; `ink`/`paper` are neutral. Used for skills, tools,
 * and category labels. Always mono.
 */
function Tag({
  children,
  tone = 'outline',
  style,
  ...rest
}) {
  const tones = {
    outline: {
      background: 'transparent',
      color: 'var(--orange)',
      border: '1.5px solid var(--orange)'
    },
    solid: {
      background: 'var(--orange)',
      color: 'var(--on-accent)',
      border: '1.5px solid var(--orange)'
    },
    blue: {
      background: 'transparent',
      color: 'var(--blue)',
      border: '1.5px solid var(--blue)'
    },
    ink: {
      background: 'var(--ink)',
      color: 'var(--cream)',
      border: '1.5px solid var(--ink)'
    },
    paper: {
      background: 'var(--cream-soft)',
      color: 'var(--ink)',
      border: '1.5px solid var(--grey-200)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1,
      letterSpacing: '0.01em',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      ...tones,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — the boxed "Key product marketing takeaway" at the foot of a case
 * study. Soft paper fill, emoji-led label, short reflective paragraph.
 */
function Callout({
  children,
  label = 'Key product marketing takeaway',
  icon = '💡',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      background: 'var(--surface-fill)',
      borderRadius: 'var(--radius-md)',
      borderLeft: '4px solid var(--accent)',
      padding: '18px 20px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 'var(--text-h3)',
      color: 'var(--ink)',
      letterSpacing: '-0.005em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: '0.95em',
      lineHeight: 1
    }
  }, icon), label, ":"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Callout.jsx", error: String((e && e.message) || e) }); }

// components/editorial/DashedDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DashedDivider — the dotted hairline that separates the title from the body
 * and sections within a case study.
 */
function DashedDivider({
  tone = 'ink',
  style,
  ...rest
}) {
  const color = tone === 'white' ? 'rgba(255,255,255,0.4)' : 'var(--rule)';
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: `1.5px dashed ${color}`,
      margin: '20px 0',
      height: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { DashedDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/DashedDivider.jsx", error: String((e && e.message) || e) }); }

// components/editorial/DeviceMockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DeviceMockup — the product screenshot that crowns each case study: a
 * rounded, shadowed shot floating on a colored band, with an optional black
 * ✕ close button overlapping the top-right (as in the overlay header).
 * Pass your own screenshot via `src`.
 */
function DeviceMockup({
  src,
  alt = '',
  band = 'var(--band-sky)',
  // colored band behind the shot
  variant = 'browser',
  // 'browser' | 'plain' | 'phone'
  onClose,
  height = 190,
  style,
  ...rest
}) {
  const radius = variant === 'phone' ? 28 : 14;
  const shot = /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: radius,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-device)',
      background: '#fff',
      width: variant === 'phone' ? height * 0.5 : '86%',
      maxWidth: variant === 'phone' ? 'none' : 520
    }
  }, variant === 'browser' && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      background: '#f3f3f3',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 12px',
      borderBottom: '1px solid #e6e6e6'
    }
  }, ['#FF5F57', '#FEBC2E', '#28C840'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: c
    }
  }))), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: height - 30,
      background: 'linear-gradient(135deg,#e9eef2,#d7dee4)'
    }
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: band,
      borderRadius: 'var(--radius-lg)',
      paddingTop: variant === 'phone' ? 24 : 26,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      minHeight: height,
      overflow: 'hidden',
      ...style
    }
  }, rest), shot, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      width: 44,
      height: 44,
      borderRadius: 999,
      background: '#000',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { DeviceMockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/DeviceMockup.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PageTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PageTitle — the bold grotesque case-study heading on paper. Tight leading,
 * heavy weight, optional mono eyebrow above it.
 */
function PageTitle({
  children,
  eyebrow,
  tone = 'ink',
  as = 'h1',
  style,
  ...rest
}) {
  const color = tone === 'white' || tone === 'cream' ? 'var(--cream)' : 'var(--ink)';
  const Tag = as;
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--accent-strong)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-title)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color
    }
  }, children));
}
Object.assign(__ds_scope, { PageTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PageTitle.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionMarker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionMarker — a bold inline section heading led by an emoji glyph. The
 * portfolio uses these as recurring signposts: 🎯 "The impact:", 💡 "Key
 * product marketing takeaway:". Emoji is intentional brand vocabulary here.
 */
function SectionMarker({
  children,
  icon = '🎯',
  tone = 'ink',
  style,
  ...rest
}) {
  const color = tone === 'white' ? '#fff' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 'var(--text-h3)',
      color,
      letterSpacing: '-0.005em',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: '0.95em',
      lineHeight: 1
    }
  }, icon), children);
}
Object.assign(__ds_scope, { SectionMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionMarker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
// CaseStudy — the editorial (cream) overlay for a single project.
const NS2 = window.PabloUrrutiaGridAwarePortfolioDS_6b21cb;
const {
  DeviceMockup,
  PageTitle,
  DashedDivider,
  SectionMarker,
  Callout,
  CircleButton
} = NS2;

// Render **bold** spans inside a string.
function rich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return /*#__PURE__*/React.createElement("strong", {
        key: i,
        style: {
          fontWeight: 700
        }
      }, part.slice(2, -2));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, part);
  });
}
function Bullets({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '12px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: 'var(--accent-strong)',
      flex: '0 0 auto',
      fontWeight: 700,
      lineHeight: 1.5
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, rich(it)))));
}
function Label({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--ink)'
    }
  }, children);
}
function CaseStudy({
  data,
  onClose,
  mode = 'common',
  onToggleMode
}) {
  const simple = mode === 'grid-aware';
  React.useEffect(() => {
    const el = document.getElementById('case-scroll');
    if (el) el.scrollTop = 0;
  }, [data && data.id]);
  if (!data) return null;
  return /*#__PURE__*/React.createElement("div", {
    id: "case-scroll",
    style: {
      background: 'var(--paper)',
      minHeight: '100%',
      color: 'var(--ink)',
      fontFamily: 'var(--font-body)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(DeviceMockup, {
    band: data.band,
    variant: "browser",
    onClose: onClose,
    height: 188
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 390,
      margin: '0 auto',
      padding: '24px 24px 44px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PageTitle, {
    eyebrow: data.eyebrow
  }, data.title), data.tldr && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: 'var(--surface-fill)',
      borderLeft: '4px solid var(--accent)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--accent-strong)',
      flex: '0 0 auto',
      paddingTop: 2
    }
  }, "TL;DR"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.45,
      color: 'var(--ink)'
    }
  }, data.tldr)), simple ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleMode,
    style: {
      alignSelf: 'flex-start',
      marginTop: 4,
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      background: 'transparent',
      border: '1.5px solid var(--accent)',
      color: 'var(--accent-strong)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 16px'
    }
  }, "Read the full version \u2192") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DashedDivider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Label, null, "The challenge:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.5
    }
  }, rich(data.challenge))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement(Label, null, "My role & solution:"), /*#__PURE__*/React.createElement(Bullets, {
    items: data.role
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SectionMarker, {
    icon: "\uD83C\uDFAF"
  }, "The impact:"), /*#__PURE__*/React.createElement(Bullets, {
    items: data.impact
  })), /*#__PURE__*/React.createElement(Callout, null, data.takeaway)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(CircleButton, {
    icon: "back",
    tone: "black",
    label: "Back",
    onClick: onClose
  }))));
}
window.CaseStudy = CaseStudy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Shell.jsx
try { (() => {
// Shell — the consumption-aware (deep) home: intro, selected case studies, bio timeline.
const NS = window.PabloUrrutiaGridAwarePortfolioDS_6b21cb;
const {
  GridAwareLockup,
  TimelineItem,
  Eyebrow,
  Tag,
  CircleButton
} = NS;
function CaseRow({
  c,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpen(c.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      background: hover ? 'rgba(233,99,26,0.10)' : 'transparent',
      border: 'none',
      borderTop: '1px solid var(--hairline-dark)',
      borderLeft: `3px solid ${hover ? 'var(--accent)' : 'transparent'}`,
      padding: '18px 16px 18px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      transition: 'background 140ms ease, border-color 140ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 6
    }
  }, c.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--cream)',
      letterSpacing: '-0.01em',
      lineHeight: 1.18
    }
  }, c.title)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: hover ? 'var(--accent)' : 'var(--text-faint)',
      fontSize: 22,
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform 120ms ease, color 120ms ease'
    }
  }, "\u2192"));
}
function ModeToggle({
  mode,
  onToggle
}) {
  const opts = [['common', 'Full'], ['grid-aware', 'Simple']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      border: '1px solid var(--hairline-dark)',
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      gap: 2
    }
  }, opts.map(([val, label]) => {
    const on = mode === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => !on && onToggle(),
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding: '5px 11px',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        background: on ? 'var(--accent)' : 'transparent',
        color: on ? 'var(--on-accent)' : 'var(--text-faint)',
        transition: 'background 140ms ease, color 140ms ease'
      }
    }, label);
  }));
}
function Shell({
  onOpenCase,
  mode = 'common',
  onToggleMode
}) {
  const D = window.PORTFOLIO_DATA;
  const simple = mode === 'grid-aware';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      minHeight: '100%',
      color: 'var(--cream)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 390,
      margin: '0 auto',
      padding: '28px 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-anchor-cut.png",
    alt: "Pablo Urrutia anchor mark",
    style: {
      height: 46
    }
  }), /*#__PURE__*/React.createElement(ModeToggle, {
    mode: mode,
    onToggle: onToggleMode
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: simple ? 400 : 700,
      fontSize: simple ? 38 : 46,
      lineHeight: 1.05,
      letterSpacing: simple ? '0' : '-0.025em'
    }
  }, D.intro.greetingTop, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, D.intro.greetingAccent)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, simple ? D.intro.blurbSimple : D.intro.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 22
    }
  }, D.intro.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "outline"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    marker: true,
    tone: "cream"
  }, "Selected case studies"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      borderBottom: '1px solid var(--hairline-dark)'
    }
  }, D.cases.map(c => /*#__PURE__*/React.createElement(CaseRow, {
    key: c.id,
    c: c,
    onOpen: onOpenCase
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: '-0.02em'
    }
  }, "Bio & Education"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--cream)',
      margin: '16px 0 18px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    marker: true,
    tone: "cream"
  }, "Click the work boxes to see more \u2193")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, D.timeline.map((t, i) => /*#__PURE__*/React.createElement(TimelineItem, {
    key: i,
    year: t.year,
    title: t.title,
    org: t.org,
    category: t.category,
    span: t.span,
    onClick: t.caseId ? () => onOpenCase(t.caseId) : undefined,
    style: {
      marginBottom: 10
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)',
      lineHeight: 1.5
    }
  }, "Drinking unhealthy amounts of coffee to keep this prototype fresh. Write to me if you need anything."), /*#__PURE__*/React.createElement(GridAwareLockup, {
    surface: "dark",
    scale: 0.85
  }))));
}
window.Shell = Shell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Pablo Urrutia × Development Seed Portfolio — content model (faithful to the source prototype frames)
window.PORTFOLIO_DATA = {
  intro: {
    greetingTop: "Hi, I'm Pablo —",
    greetingAccent: "I build & launch climate products.",
    blurbSimple: "PM · Project mgmt · Design systems · Sustainability · Data viz · Product comms. Simple mode = TL;DR only. Toggle Full for the deep read.",
    blurb: "Product & project management, design systems, sustainability, data-viz and product comms — I work across all of them to get environmental-data products built, launched and understood. Disclaimer: there's a lot here, and I doubt you'll read ALL OF IT. So I've shipped two versions — the consumption-aware deep read, and a TL;DR. Good PM practice.",
    tags: ["Product Management", "Project Management", "Design Systems", "Sustainability", "Data Viz", "Product Comms"]
  },
  // Bio & Education timeline — color encodes type; height encodes duration.
  timeline: [{
    year: "1988",
    title: "Background",
    org: "Granada, ES",
    category: "neutral",
    span: 1.2
  }, {
    year: "2015",
    title: "Biology Sciences Degree",
    org: "UGR",
    category: "study",
    span: 1.6
  }, {
    year: "2016",
    title: "Scuba Diver",
    org: "Buceo La Herradura & ARGOS",
    category: "neutral",
    span: 1
  }, {
    year: "2017",
    title: "Master MKT & Social Media",
    org: "UGR",
    category: "study",
    span: 1
  }, {
    year: "2018",
    title: "PM",
    org: "Flat 101",
    category: "work",
    span: 1
  }, {
    year: "2019",
    title: "Agile & Comms Consultant",
    org: "Pablo del Mares (freelance)",
    category: "work",
    span: 1
  }, {
    year: "2020",
    title: "PM & Comms Consultant",
    org: "Prodigioso Volcán",
    category: "work",
    span: 1.4
  }, {
    year: "2022",
    title: "PM & Comms Coordinator",
    org: "Vizzuality",
    category: "work",
    span: 2.4,
    caseId: "comms-plan"
  }],
  // Case studies — the editorial overlays.
  cases: [{
    id: "comms-plan",
    eyebrow: "Product Comms · Vizzuality",
    title: "Product Marketing & Communications Plan",
    band: "var(--band-blue)",
    tldr: "Authored the CDE Plan that became Vizzuality's core comms strategy — helping win 4 more EU projects.",
    challenge: "For Landgriffon, CoCliCo and MIRACA — EU-funded climate adaptation platforms — we needed a robust Communication, Dissemination & Exploitation (CDE) Plan aligned with Horizon Europe standards, but also tailored for real stakeholder engagement and measurable impact.",
    role: ["Developed and authored the **CDE Plan**, integrating stakeholder personas, messaging strategy, SEO considerations and a content calendar.", "Defined **KPIs** for product visibility, engagement and conversion through public-facing channels.", "Budgeted for digital marketing, webinar outreach, video production and community-building.", "Established reporting structures and templates for the Funding & Tenders Portal and SyGMa."],
    impact: ["The plan became the **core communications strategy**, guiding content production, funnel optimization and stakeholder outreach.", "Helped Vizzuality position itself as a **trusted reference in product comms**, contributing to winning **4 additional EU projects**."],
    takeaway: "A strategic comms plan bridges product development and audience adoption — the foundation for sustainable inbound marketing, lead generation, and measurable product impact."
  }, {
    id: "templates",
    eyebrow: "Product Comms · Vizzuality",
    title: "Creating Templates & Workflows for Product Comms",
    band: "var(--band-cream)",
    tldr: "Built a reusable content template that 3x'd production speed and standardized product comms.",
    challenge: "As climate platforms matured, each feature needed stakeholder-friendly explanation. Content creation was time-consuming, inconsistent, and lacked a scalable framework.",
    role: ["Designed and implemented a **reusable content template** that became the standard for most platform blog posts and feature announcements.", "Defined elements: a real-world intro scenario, a jargon-free explanation, who it's for and why it's useful, step-by-step how-to, related resources, and a clear CTA.", "Added marketing materials for BD & Sales — battle cards, value props, elevator pitches, benchmarks."],
    impact: ["Created a **repeatable storytelling structure** that saved time and ensured clarity across all product comms.", "**Streamlined content production by 3x**, letting any team member draft posts aligned with product-marketing goals.", "Supported SEO and **improved organic traffic** through consistent keyword placement and structured content."],
    takeaway: "Building scalable content frameworks transforms feature marketing from reactive to proactive — faster go-to-market, consistent messaging, and more effective storytelling for technical platforms."
  }, {
    id: "mongabay",
    eyebrow: "Funnels · Mongabay",
    title: "Optimizing the User Funnel for Mongabay's Reforestation App",
    band: "var(--band-orange)",
    tldr: "Rebuilt the funnel & onboarding — 2.3x time-on-platform and 5x project-page visits.",
    challenge: "Despite robust data, engagement and retention were underperforming. Analytics revealed drop-off at the initial search interface — users struggled to interpret icons, navigate filters, and understand the platform's value.",
    role: ["**Top-of-funnel:** refined landing-page messaging to clearly communicate purpose and value proposition.", "**Mid-funnel:** designed a guided onboarding with step-by-step walkthroughs explaining navigation and iconography.", "**Bottom-of-funnel:** improved search-filter logic and added contextual help, increasing project-specific views."],
    impact: ["Users completing onboarding spent **2.3x more time** exploring datasets.", "Visits to project-level pages **increased by 5x**.", "The refined journey contributed to stronger engagement metrics used to **secure re-funding**."],
    takeaway: "Product marketing is about more than messaging — it's understanding user behavior, mapping friction in the funnel, and using content & product guidance to drive valuable actions."
  }, {
    id: "trase",
    eyebrow: "User Research · Trase.Earth",
    title: "Turning User Feedback into Product Improvements on Trase.Earth",
    band: "var(--band-blue)",
    tldr: "Turned user research into a guided, context-first redesign that broadened reach beyond experts.",
    challenge: "Trase.Earth visualizes global commodity supply chains with complex Sankey diagrams and data cards. Powerful for experts — but non-expert users struggled, leading to high drop-off. They needed simplified, trade-context-specific insights up front.",
    role: ["Collaborated with UX, product and data-science teams to synthesize **user-research findings into product recommendations**.", "Proposed a flow: select a trade context first (e.g. \"Soy exports from Brazil to the EU\"), then deliver pre-processed data cards.", "Preserved raw-data access for advanced users — but only after digestible insights.", "Presented **structured documentation and user narratives** to align prioritization."],
    impact: ["The team **pivoted the platform** toward guided context selection and simplified insight delivery.", "Search completion rates improved; **more users successfully found** relevant data.", "The platform became more accessible — broadening reach beyond experts to policymakers, media and NGOs."],
    takeaway: "Product marketing isn't just messaging — it's listening to user signals, translating feedback into product strategy, and reducing friction along the funnel."
  }, {
    id: "feedback-campaign",
    eyebrow: "Campaigns · CoCliCo",
    title: "A Marketing Campaign to Gather User Feedback",
    band: "var(--band-coral)",
    tldr: "Ran a LinkedIn + webinar campaign that fed real user language straight into product definition.",
    challenge: "We needed to ensure that complex climate projections and coastal-risk models were usable and relevant for decision-makers across Europe. Assumptions weren't enough — we needed direct insights from real users.",
    role: ["Co-designed and launched a **LinkedIn campaign** targeting climate-adaptation professionals.", "Created messaging and CTAs that encouraged participation in product-discovery webinars.", "Generated engagement from local authorities, port managers, national governments and private infrastructure stakeholders.", "Collected qualitative feedback into a **\"Rich User Narrative\"** document of real decision-making processes and pain points."],
    impact: ["Direct user input fed into **product definition**, shaping platform features and content structure.", "Increased trust by **embedding user language into product communications** from the start.", "Laid the **foundation for future targeted inbound campaigns and SEO**."],
    takeaway: "Early user engagement is critical for validating messaging, aligning value propositions, and reducing friction in future marketing funnels."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

__ds_ns.GridAwareLockup = __ds_scope.GridAwareLockup;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CircleButton = __ds_scope.CircleButton;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.DashedDivider = __ds_scope.DashedDivider;

__ds_ns.DeviceMockup = __ds_scope.DeviceMockup;

__ds_ns.PageTitle = __ds_scope.PageTitle;

__ds_ns.SectionMarker = __ds_scope.SectionMarker;

})();
