/* @ds-bundle: {"format":4,"namespace":"DanielaAielloDesignSystem_51c558","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"PropertyCard","sourcePath":"components/realestate/PropertyCard.jsx"},{"name":"SectionHeading","sourcePath":"components/realestate/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/realestate/Stat.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"66bae168590a","components/core/Button.jsx":"e62ae6c6734f","components/core/IconButton.jsx":"db9d01c0120f","components/core/Logo.jsx":"0b98bb2c2af7","components/forms/Checkbox.jsx":"df312037b2ff","components/forms/Input.jsx":"f7f4988301a5","components/forms/Select.jsx":"e06eed520389","components/realestate/PropertyCard.jsx":"542ef6abd743","components/realestate/SectionHeading.jsx":"b38db087630d","components/realestate/Stat.jsx":"a26a5eb7a158","ui_kits/sitio-web/Chrome.jsx":"23143af63a19","ui_kits/sitio-web/Home.jsx":"6d7e20c541b6","ui_kits/sitio-web/Inner.jsx":"9228a7c92f22","ui_kits/sitio-web/data.js":"b7acc10febdc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DanielaAielloDesignSystem_51c558 = window.DanielaAielloDesignSystem_51c558 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Daniela Aiello — Badge
 * Small status / category marker. Used on property cards (estado del
 * proyecto) and listings.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      fg: 'var(--da-stone-600)',
      bg: 'var(--da-sand-100)',
      bd: 'var(--border-default)'
    },
    petrol: {
      fg: 'var(--da-petrol)',
      bg: 'var(--da-petrol-50)',
      bd: 'var(--da-petrol-100)'
    },
    red: {
      fg: 'var(--da-red)',
      bg: 'var(--da-red-50)',
      bd: 'var(--da-red-100)'
    },
    success: {
      fg: '#1c6b4a',
      bg: '#e6f3ec',
      bd: '#bfe0cd'
    }
  };
  const t = tones[tone] || tones.neutral;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: 24,
    padding: '0 10px',
    fontFamily: 'var(--da-font-body)',
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    color: solid ? 'var(--da-white)' : t.fg,
    background: solid ? t.fg : t.bg,
    border: `1px solid ${solid ? t.fg : t.bd}`,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Daniela Aiello — Button
 * Primary action button. Petrol by default; red for high-signal CTAs.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 16px',
      height: 38,
      fontSize: 'var(--fs-sm)'
    },
    md: {
      padding: '0 24px',
      height: 46,
      fontSize: 'var(--fs-body)'
    },
    lg: {
      padding: '0 34px',
      height: 56,
      fontSize: 'var(--fs-lead)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--color-primary)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--da-white)',
      border: '1px solid var(--color-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent'
    },
    'on-dark': {
      background: 'var(--da-white)',
      color: 'var(--color-primary)',
      border: '1px solid var(--da-white)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontFamily: 'var(--da-font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    borderRadius: 'var(--radius-sm)',
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--da-sand-100)',
    ghost: 'var(--da-sand-100)',
    'on-dark': 'var(--da-petrol-50)'
  }[variant];
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.background = hoverBg;
  };
  const onLeave = e => {
    if (!disabled) e.currentTarget.style.background = variants[variant].background;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'none';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: e => {
      onLeave(e);
      onUp(e);
    },
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Daniela Aiello — IconButton
 * Square/round button for a single icon (nav, carousel, social).
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  round = false,
  'aria-label': ariaLabel,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 42,
    lg: 50
  }[size];
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-default)'
    },
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--da-white)',
      border: '1px solid var(--color-primary)'
    },
    'on-dark': {
      background: 'rgba(255,255,255,0.12)',
      color: 'var(--da-white)',
      border: '1px solid rgba(255,255,255,0.4)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dims,
    height: dims,
    flex: '0 0 auto',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
    ...variants[variant],
    ...style
  };
  const hover = {
    ghost: 'var(--da-sand-100)',
    outline: 'var(--da-sand-100)',
    solid: 'var(--color-primary-hover)',
    'on-dark': 'rgba(255,255,255,0.24)'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hover;
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Daniela Aiello — Logo
 * Self-contained, recolorable brand logo. `mark` is the iso (infinity "DA"),
 * `full` is the primary lockup (iso + DANIELA AIELLO + tagline).
 * In `color`, the two strokes split petrol / red exactly as the master art.
 */
function Logo({
  variant = 'color',
  form = 'full',
  height,
  style,
  ...rest
}) {
  const palette = {
    color: {
      a: 'var(--da-red)',
      b: 'var(--da-petrol)'
    },
    petrol: {
      a: 'var(--da-petrol)',
      b: 'var(--da-petrol)'
    },
    white: {
      a: '#FFFFFF',
      b: '#FFFFFF'
    }
  }[variant];
  const wrap = {
    display: 'inline-block',
    lineHeight: 0,
    ...style
  };
  if (form === 'mark') {
    const h = height || 40;
    return /*#__PURE__*/React.createElement("span", _extends({
      style: wrap
    }, rest), /*#__PURE__*/React.createElement("svg", {
      height: h,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": "Daniela Aiello"
    }, /*#__PURE__*/React.createElement("path", {
      fill: palette.a,
      d: "M120.43,177.77l62.17-68.45-29.12.42-22.03,24.93-13.78-12.45c-16.08-14.53-40.98-13.27-55.52,2.81-6.78,7.51-10.13,16.93-10.13,26.33,0,10.73,4.36,21.43,12.93,29.19,16.09,14.53,40.99,13.27,55.49-2.78ZM77.58,138.97c6.89-7.62,18.65-8.25,26.21-1.42l13.84,12.5-12.51,13.83c-3.3,3.65-7.86,5.8-12.82,6.04-4.97.23-9.73-1.48-13.42-4.82-3.68-3.31-5.83-7.86-6.08-12.78-.18-5.04,1.45-9.67,4.77-13.34Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: palette.b,
      d: "M237.44,176.09c7.15-7.68,10.99-17.92,10.5-28.19-.37-10.5-4.81-20.21-12.49-27.37-15.86-14.76-40.79-13.88-55.57,1.98l-26.86,28.88,28.76,26.78c15.87,14.77,40.83,13.83,55.65-2.08ZM195.03,136.6c3.36-3.61,7.94-5.69,12.9-5.85,4.97-.15,9.71,1.62,13.34,5.01,3.63,3.37,5.72,7.94,5.89,12.87.01.23.02.45.02.68,0,4.67-1.76,9.13-4.98,12.59-3.38,3.64-7.99,5.75-12.95,5.95-4.97.2-9.69-1.55-13.3-4.92l-13.63-12.7,12.7-13.64Z"
    })));
  }

  // full lockup
  const h = height || 52;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("svg", {
    height: h,
    viewBox: "0 0 483.31 194.83",
    role: "img",
    "aria-label": "Daniela Aiello \u2014 Desarrollos & Inversiones"
  }, /*#__PURE__*/React.createElement("path", {
    fill: palette.a,
    d: "M222.94,69.99l38.16-42.01-17.87.26-13.52,15.3-8.46-7.64c-9.87-8.92-25.15-8.14-34.07,1.72-4.16,4.61-6.22,10.39-6.22,16.16,0,6.59,2.67,13.15,7.93,17.91,9.87,8.92,25.16,8.14,34.05-1.7ZM196.64,46.18c4.23-4.67,11.45-5.06,16.09-.87l8.49,7.67-7.68,8.49c-2.03,2.24-4.82,3.56-7.87,3.7-3.05.14-5.97-.91-8.24-2.96-2.26-2.03-3.58-4.82-3.73-7.85-.11-3.09.89-5.93,2.93-8.19Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.b,
    d: "M294.75,68.96c4.39-4.71,6.75-11,6.44-17.3-.23-6.44-2.95-12.4-7.66-16.8-9.73-9.06-25.03-8.52-34.1,1.21l-16.49,17.72,17.65,16.44c9.74,9.06,25.06,8.49,34.16-1.28ZM268.72,44.73c2.06-2.22,4.88-3.5,7.92-3.59,3.05-.09,5.96,1,8.19,3.08,2.23,2.07,3.51,4.88,3.62,7.9,0,.14.01.28.01.42,0,2.87-1.08,5.6-3.06,7.72-2.07,2.24-4.9,3.53-7.95,3.65-3.05.12-5.95-.95-8.16-3.02l-8.36-7.79,7.79-8.37Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.b,
    d: "M59.42,97.83c9.14,0,16.57,7.39,16.57,16.53,0,4.07-1.47,7.81-3.93,10.7-.28.33-.62.66-.95.99-2.98,3.03-7.1,4.88-11.65,4.88h-16.57v-33.15l16.53.05ZM48.77,125.05h10.65c5.87,0,10.65-4.78,10.65-10.65s-4.78-10.65-10.65-10.65h-10.65v21.31Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.b,
    d: "M144.51,97.83v33.15l-5.92-4.55-21.31-16.43v20.98h-5.92v-33.05l5.92,4.55,21.31,16.43v-21.12l5.92.05Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.b,
    d: "M149.24,130.93v-33.15h5.92v33.15h-5.92Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.b,
    d: "M165.81,106.73v3.08h21.31v5.92h-21.31v6.25c0,1.66,1.37,3.03,3.03,3.03h24.2v5.92h-24.2c-4.92,0-8.9-4.02-8.9-8.95v-15.25c0-4.92,3.98-8.95,8.9-8.95h24.2v5.92h-24.2c-1.66,0-3.03,1.37-3.03,3.03Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.b,
    d: "M225.09,125.05v5.92h-16.81c-1.66,0-3.22-.38-4.64-1.09-2.08-1.04-3.79-2.75-4.78-4.83-.71-1.42-1.09-2.98-1.09-4.64v-22.59h5.92v23.15c.28,2.08,1.94,3.74,4.02,4.03l17.38.05Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.b,
    d: "M101.89,130.93h6.63l-3.03-5.92-13.87-27.23-13.87,27.23-3.03,5.92h6.63l1.4-2.73h17.75l1.4,2.73ZM97.98,123.27h-12.72l6.36-12.47,6.36,12.47Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.b,
    d: "M255.15,130.93h6.63l-3.03-5.92-13.87-27.23-13.87,27.23-3.03,5.92h6.63l1.4-2.73h17.75l1.4,2.73ZM251.24,123.27h-12.72l6.36-12.47,6.36,12.47Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.a,
    d: "M299.42,130.93v-33.15h5.92v33.15h-5.92Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.a,
    d: "M315.99,106.73v3.08h21.31v5.92h-21.31v6.25c0,1.66,1.37,3.03,3.03,3.03h24.2v5.92h-24.2c-4.92,0-8.9-4.02-8.9-8.95v-15.25c0-4.92,3.98-8.95,8.9-8.95h24.2v5.92h-24.2c-1.66,0-3.03,1.37-3.03,3.03Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.a,
    d: "M375.27,125.05v5.92h-16.81c-1.66,0-3.22-.38-4.64-1.09-2.08-1.04-3.79-2.75-4.78-4.83-.71-1.42-1.09-2.98-1.09-4.64v-22.59h5.92v23.15c.28,2.08,1.94,3.74,4.02,4.03l17.38.05Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.a,
    d: "M407.32,125.05v5.92h-16.81c-1.66,0-3.22-.38-4.64-1.09-2.08-1.04-3.79-2.75-4.78-4.83-.71-1.42-1.09-2.98-1.09-4.64v-22.59h5.92v23.15c.28,2.08,1.94,3.74,4.02,4.03l17.38.05Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.a,
    d: "M440.41,114.35c0,9.14-7.43,16.57-16.57,16.57s-16.57-7.43-16.57-16.57,7.43-16.57,16.57-16.57,16.57,7.43,16.57,16.57ZM434.5,114.35c0-5.87-4.78-10.65-10.65-10.65s-10.65,4.78-10.65,10.65,4.78,10.65,10.65,10.65,10.65-4.78,10.65-10.65Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: palette.a,
    d: "M289.95,130.93h6.63l-3.03-5.92-13.87-27.23-13.87,27.23-3.03,5.92h6.63l1.4-2.73h17.75l1.4,2.73ZM286.03,123.27h-12.72l6.36-12.47,6.36,12.47Z"
  }), /*#__PURE__*/React.createElement("g", {
    fill: palette.a
  }, /*#__PURE__*/React.createElement("path", {
    d: "M76.89,166.14v-15.18h4.22c1.51,0,2.79.23,3.85.69,1.06.46,1.91,1.07,2.56,1.82.65.75,1.12,1.59,1.42,2.51.3.92.45,1.85.45,2.78,0,1.13-.2,2.15-.61,3.05-.4.91-.95,1.68-1.65,2.33-.7.65-1.5,1.14-2.4,1.48-.91.34-1.87.51-2.88.51h-4.95ZM79.13,163.98h2.3c.82,0,1.58-.12,2.27-.36s1.29-.59,1.8-1.05c.51-.46.9-1.02,1.18-1.69s.42-1.44.42-2.3c0-.93-.16-1.75-.47-2.44-.31-.69-.73-1.26-1.24-1.71-.52-.45-1.09-.79-1.72-1-.63-.22-1.28-.32-1.93-.32h-2.59v10.87Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92.71,150.96h9.97v2.15h-7.73v4.33h6.88v2.15h-6.88v4.39h8.03v2.15h-10.26v-15.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.31,153.87c-.53-.28-1.1-.52-1.71-.71-.61-.2-1.21-.29-1.78-.29-.78,0-1.4.18-1.86.53-.46.36-.69.84-.69,1.45,0,.43.15.81.46,1.13.31.32.7.6,1.19.84.49.24,1,.46,1.55.67.46.17.92.37,1.37.6.45.23.86.51,1.23.85.37.33.66.75.88,1.24.22.49.32,1.1.32,1.81,0,.81-.2,1.54-.6,2.2s-.97,1.17-1.71,1.56c-.75.38-1.65.57-2.71.57-.64,0-1.26-.07-1.87-.22-.61-.15-1.18-.34-1.71-.59-.54-.24-1.02-.51-1.45-.8l1-1.73c.33.24.72.46,1.15.68.43.22.88.39,1.35.51.47.13.91.19,1.33.19.46,0,.91-.08,1.36-.24s.82-.41,1.11-.75c.29-.34.44-.79.44-1.35,0-.47-.13-.87-.39-1.2-.26-.33-.6-.61-1.02-.85-.43-.24-.88-.45-1.37-.63-.47-.18-.95-.38-1.44-.61-.49-.22-.94-.49-1.36-.8-.42-.31-.76-.7-1.01-1.17s-.39-1.04-.39-1.72c0-.81.19-1.52.57-2.12.38-.61.92-1.08,1.6-1.43.68-.35,1.47-.54,2.36-.59,1.02,0,1.9.13,2.65.38.75.25,1.42.55,2.01.9l-.86,1.71Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M117.02,166.14l6.67-15.78h.13l6.67,15.78h-2.55l-4.85-12.29,1.61-1.07-5.48,13.36h-2.19ZM121.08,160.45h5.39l.77,1.92h-6.84l.67-1.92Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M137.36,150.96c.79,0,1.53.11,2.21.32s1.25.53,1.73.93c.48.4.86.9,1.13,1.49.27.59.41,1.28.41,2.06,0,.6-.09,1.19-.27,1.78s-.47,1.11-.88,1.59c-.4.47-.93.85-1.59,1.14s-1.47.43-2.45.43h-2.22v5.43h-2.24v-15.18h4.16ZM137.61,158.57c.57,0,1.05-.09,1.43-.27.38-.18.68-.41.9-.68.22-.27.37-.56.46-.88.09-.31.14-.62.14-.91s-.04-.57-.14-.88c-.09-.31-.24-.6-.46-.88-.22-.28-.51-.51-.87-.69-.36-.18-.81-.27-1.34-.27h-2.3v5.46h2.17ZM140.18,159.87l3.93,6.27h-2.59l-3.99-6.21,2.65-.06Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M151.26,150.96c.79,0,1.53.11,2.21.32s1.25.53,1.73.93c.48.4.86.9,1.13,1.49.27.59.41,1.28.41,2.06,0,.6-.09,1.19-.27,1.78s-.47,1.11-.88,1.59c-.4.47-.93.85-1.59,1.14s-1.47.43-2.45.43h-2.22v5.43h-2.24v-15.18h4.16ZM151.51,158.57c.57,0,1.05-.09,1.43-.27.38-.18.68-.41.9-.68.22-.27.37-.56.46-.88.09-.31.14-.62.14-.91s-.04-.57-.14-.88c-.09-.31-.24-.6-.46-.88-.22-.28-.51-.51-.87-.69-.36-.18-.81-.27-1.34-.27h-2.3v5.46h2.17ZM154.08,159.87l3.93,6.27h-2.59l-3.99-6.21,2.65-.06Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M159.69,158.57c0-1.05.2-2.03.6-2.97.4-.93.95-1.76,1.66-2.49.71-.72,1.53-1.29,2.47-1.7.93-.41,1.94-.62,3.01-.62s2.06.21,2.99.62c.93.41,1.76.98,2.49,1.7.72.72,1.29,1.55,1.69,2.49.4.93.61,1.92.61,2.97s-.2,2.08-.61,3.01c-.41.93-.97,1.76-1.68,2.47-.72.71-1.55,1.26-2.49,1.66-.94.4-1.94.6-3,.6s-2.08-.2-3.01-.59-1.76-.94-2.47-1.64c-.71-.7-1.26-1.53-1.66-2.47-.4-.94-.6-1.95-.6-3.04ZM161.99,158.57c0,.78.14,1.51.43,2.18.29.68.68,1.27,1.18,1.78s1.08.91,1.75,1.19c.66.29,1.38.43,2.14.43s1.46-.14,2.11-.43c.65-.29,1.23-.68,1.72-1.19.49-.51.88-1.1,1.16-1.78.28-.68.42-1.4.42-2.18s-.14-1.51-.43-2.18c-.29-.68-.68-1.27-1.17-1.79-.49-.52-1.07-.92-1.73-1.21-.66-.29-1.37-.44-2.12-.44s-1.5.15-2.15.44c-.66.29-1.23.7-1.73,1.21s-.89,1.11-1.16,1.8c-.27.68-.41,1.41-.41,2.17Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M178.52,150.96h2.24v13.02h7.59v2.15h-9.83v-15.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M191.6,150.96h2.24v13.02h7.59v2.15h-9.83v-15.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M203.46,158.57c0-1.05.2-2.03.6-2.97.4-.93.95-1.76,1.66-2.49.71-.72,1.53-1.29,2.47-1.7.93-.41,1.94-.62,3.01-.62s2.06.21,2.99.62c.93.41,1.76.98,2.49,1.7.72.72,1.29,1.55,1.69,2.49.4.93.61,1.92.61,2.97s-.2,2.08-.61,3.01c-.41.93-.97,1.76-1.68,2.47-.72.71-1.55,1.26-2.49,1.66-.94.4-1.94.6-3,.6s-2.08-.2-3.01-.59-1.76-.94-2.47-1.64c-.71-.7-1.26-1.53-1.66-2.47-.4-.94-.6-1.95-.6-3.04ZM205.76,158.57c0,.78.14,1.51.43,2.18.29.68.68,1.27,1.18,1.78s1.08.91,1.75,1.19c.66.29,1.38.43,2.14.43s1.46-.14,2.11-.43c.65-.29,1.23-.68,1.72-1.19.49-.51.88-1.1,1.16-1.78.28-.68.42-1.4.42-2.18s-.14-1.51-.43-2.18c-.29-.68-.68-1.27-1.17-1.79-.49-.52-1.07-.92-1.73-1.21-.66-.29-1.37-.44-2.12-.44s-1.5.15-2.15.44c-.66.29-1.23.7-1.73,1.21s-.89,1.11-1.16,1.8c-.27.68-.41,1.41-.41,2.17Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M230.19,153.87c-.53-.28-1.1-.52-1.71-.71s-1.21-.29-1.78-.29c-.78,0-1.4.18-1.86.53s-.69.84-.69,1.45c0,.43.15.81.46,1.13.31.32.7.6,1.19.84.49.24,1,.46,1.55.67.46.17.92.37,1.37.6.45.23.86.51,1.23.85.37.33.66.75.88,1.24.21.49.32,1.1.32,1.81,0,.81-.2,1.54-.6,2.2s-.97,1.17-1.71,1.56c-.75.38-1.65.57-2.71.57-.64,0-1.26-.07-1.87-.22-.61-.15-1.18-.34-1.71-.59-.54-.24-1.02-.51-1.45-.8l1-1.73c.33.24.72.46,1.15.68.43.22.88.39,1.35.51.47.13.91.19,1.33.19.46,0,.91-.08,1.36-.24s.82-.41,1.11-.75c.29-.34.44-.79.44-1.35,0-.47-.13-.87-.39-1.2-.26-.33-.6-.61-1.02-.85-.42-.24-.88-.45-1.37-.63-.47-.18-.95-.38-1.44-.61-.49-.22-.94-.49-1.36-.8-.42-.31-.76-.7-1.01-1.17s-.39-1.04-.39-1.72c0-.81.19-1.52.57-2.12.38-.61.92-1.08,1.6-1.43s1.47-.54,2.36-.59c1.02,0,1.9.13,2.65.38.75.25,1.42.55,2.01.9l-.86,1.71Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M245.39,158.93c-.38,0-.74.07-1.11.22-.36.15-.68.35-.96.61-.28.26-.5.55-.66.89-.16.33-.24.7-.24,1.09,0,.53.14.99.41,1.38.27.39.64.7,1.1.92.46.22.96.33,1.5.33s.97-.08,1.35-.24c.38-.16.71-.37.98-.63.27-.26.48-.55.62-.87l1.42,1.23c-.36.7-.94,1.29-1.72,1.77-.79.48-1.77.72-2.94.72-.95,0-1.8-.2-2.56-.59-.76-.39-1.36-.93-1.81-1.61-.45-.68-.67-1.46-.67-2.32,0-.65.15-1.26.45-1.83.3-.56.7-1.05,1.2-1.46.5-.41,1.06-.74,1.68-.98s1.26-.37,1.91-.39l.04,1.76ZM253.21,166.14h-2.59l-7.15-9.49c-.13-.19-.28-.44-.45-.74-.17-.3-.33-.63-.45-1-.13-.37-.19-.76-.19-1.16,0-.59.14-1.14.43-1.66.29-.52.71-.95,1.28-1.3.57-.34,1.25-.51,2.06-.51.86,0,1.63.17,2.3.51.67.34,1.21.75,1.63,1.22l-1.11,1.48c-.43-.4-.85-.73-1.27-.97-.41-.24-.81-.37-1.2-.37-.59,0-1.03.17-1.35.52-.31.35-.47.77-.47,1.25,0,.24.05.48.16.74s.21.48.31.67.17.3.2.35l7.86,10.45ZM250.49,157.17h2.05l-2.49,6.33-1.61-1,2.05-5.33Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M262.97,150.96h2.24v15.18h-2.24v-15.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M282.7,166.66l-11.68-11.6.65.21.07,10.87h-2.26v-15.66h.1l11.54,11.62-.52-.15-.04-11h2.22v15.7h-.06Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M288.38,150.96l4.89,12.21-1.27-.23,4.58-11.98h2.63l-6.75,15.89-6.73-15.89h2.65Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M302.14,150.96h9.97v2.15h-7.74v4.33h6.88v2.15h-6.88v4.39h8.03v2.15h-10.26v-15.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M319.99,150.96c.79,0,1.53.11,2.21.32.67.22,1.25.53,1.73.93.48.4.86.9,1.13,1.49.27.59.41,1.28.41,2.06,0,.6-.09,1.19-.27,1.78-.18.59-.47,1.11-.88,1.59-.4.47-.93.85-1.59,1.14-.66.29-1.47.43-2.45.43h-2.22v5.43h-2.24v-15.18h4.16ZM320.24,158.57c.57,0,1.05-.09,1.43-.27.38-.18.68-.41.9-.68s.37-.56.46-.88c.09-.31.14-.62.14-.91s-.04-.57-.14-.88c-.09-.31-.24-.6-.46-.88s-.51-.51-.87-.69-.81-.27-1.34-.27h-2.3v5.46h2.17ZM322.81,159.87l3.93,6.27h-2.59l-3.99-6.21,2.66-.06Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M337.63,153.87c-.53-.28-1.1-.52-1.71-.71-.61-.2-1.21-.29-1.78-.29-.78,0-1.4.18-1.86.53-.46.36-.69.84-.69,1.45,0,.43.15.81.46,1.13.3.32.7.6,1.19.84.49.24,1,.46,1.55.67.46.17.92.37,1.37.6.45.23.86.51,1.23.85.37.33.66.75.88,1.24.22.49.32,1.1.32,1.81,0,.81-.2,1.54-.59,2.2-.4.66-.97,1.17-1.71,1.56-.75.38-1.65.57-2.71.57-.64,0-1.26-.07-1.87-.22-.61-.15-1.18-.34-1.71-.59-.54-.24-1.02-.51-1.45-.8l1.01-1.73c.33.24.72.46,1.15.68s.88.39,1.35.51c.47.13.91.19,1.33.19.46,0,.91-.08,1.36-.24s.82-.41,1.11-.75c.29-.34.44-.79.44-1.35,0-.47-.13-.87-.39-1.2-.26-.33-.6-.61-1.02-.85-.42-.24-.88-.45-1.37-.63-.47-.18-.95-.38-1.44-.61-.49-.22-.94-.49-1.36-.8-.42-.31-.76-.7-1.01-1.17s-.39-1.04-.39-1.72c0-.81.19-1.52.58-2.12.38-.61.92-1.08,1.6-1.43s1.47-.54,2.36-.59c1.02,0,1.9.13,2.65.38.75.25,1.42.55,2.01.9l-.86,1.71Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M341.9,150.96h2.24v15.18h-2.24v-15.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M347.46,158.57c0-1.05.2-2.03.6-2.97.4-.93.95-1.76,1.66-2.49.71-.72,1.53-1.29,2.47-1.7.93-.41,1.94-.62,3.01-.62s2.06.21,2.99.62c.93.41,1.76.98,2.49,1.7.72.72,1.29,1.55,1.69,2.49.4.93.61,1.92.61,2.97s-.2,2.08-.61,3.01c-.4.93-.96,1.76-1.68,2.47-.72.71-1.55,1.26-2.49,1.66s-1.94.6-3,.6-2.08-.2-3.01-.59c-.94-.39-1.76-.94-2.47-1.64-.71-.7-1.27-1.53-1.66-2.47-.4-.94-.6-1.95-.6-3.04ZM349.76,158.57c0,.78.14,1.51.43,2.18.29.68.68,1.27,1.18,1.78.5.51,1.08.91,1.75,1.19.66.29,1.38.43,2.14.43s1.46-.14,2.11-.43c.65-.29,1.23-.68,1.72-1.19s.88-1.1,1.16-1.78c.28-.68.42-1.4.42-2.18s-.14-1.51-.43-2.18c-.29-.68-.68-1.27-1.17-1.79s-1.07-.92-1.73-1.21c-.66-.29-1.37-.44-2.12-.44s-1.5.15-2.15.44c-.66.29-1.23.7-1.73,1.21-.5.52-.89,1.11-1.16,1.8-.27.68-.41,1.41-.41,2.17Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M379.52,166.66l-11.68-11.6.65.21.06,10.87h-2.26v-15.66h.1l11.54,11.62-.52-.15-.04-11h2.21v15.7h-.06Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M383.87,150.96h9.97v2.15h-7.73v4.33h6.88v2.15h-6.88v4.39h8.03v2.15h-10.27v-15.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M405.46,153.87c-.53-.28-1.1-.52-1.71-.71-.61-.2-1.21-.29-1.78-.29-.78,0-1.4.18-1.86.53-.46.36-.69.84-.69,1.45,0,.43.15.81.46,1.13.3.32.7.6,1.19.84.49.24,1,.46,1.55.67.46.17.92.37,1.37.6.45.23.86.51,1.23.85.37.33.66.75.88,1.24.22.49.32,1.1.32,1.81,0,.81-.2,1.54-.59,2.2-.4.66-.97,1.17-1.71,1.56-.75.38-1.65.57-2.71.57-.64,0-1.26-.07-1.87-.22-.61-.15-1.18-.34-1.71-.59-.54-.24-1.02-.51-1.45-.8l1.01-1.73c.33.24.72.46,1.15.68s.88.39,1.35.51c.47.13.91.19,1.33.19.46,0,.91-.08,1.36-.24s.82-.41,1.11-.75c.29-.34.44-.79.44-1.35,0-.47-.13-.87-.39-1.2-.26-.33-.6-.61-1.02-.85-.42-.24-.88-.45-1.37-.63-.47-.18-.95-.38-1.44-.61-.49-.22-.94-.49-1.36-.8-.42-.31-.76-.7-1.01-1.17s-.39-1.04-.39-1.72c0-.81.19-1.52.58-2.12.38-.61.92-1.08,1.6-1.43s1.47-.54,2.36-.59c1.02,0,1.9.13,2.65.38.75.25,1.42.55,2.01.9l-.86,1.71Z"
  }))));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Daniela Aiello — Checkbox
 * Square checkbox with petrol fill when checked. Controlled or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const fieldId = id || `da-check-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const row = {
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: 10,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    fontFamily: 'var(--da-font-body)',
    fontSize: 'var(--fs-sm)',
    color: 'var(--text-body)',
    ...style
  };
  const box = {
    position: 'relative',
    flex: '0 0 auto',
    width: 20,
    height: 20,
    marginTop: 1,
    borderRadius: 'var(--radius-sm)',
    border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
    background: on ? 'var(--color-primary)' : 'var(--color-surface)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
  };
  const tick = {
    width: 11,
    height: 6,
    marginTop: -2,
    borderLeft: '2px solid #fff',
    borderBottom: '2px solid #fff',
    transform: 'rotate(-45deg)',
    opacity: on ? 1 : 0
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: box
  }, /*#__PURE__*/React.createElement("span", {
    style: tick
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: handle,
    style: {
      position: 'absolute',
      opacity: 0,
      inset: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Daniela Aiello — Input
 * Text field with optional label, helper and error. Used in contact /
 * reservation forms. Crisp underline-meets-box style with petrol focus.
 */
function Input({
  label,
  helper,
  error,
  id,
  type = 'text',
  prefix,
  suffix,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || `da-input-${Math.random().toString(36).slice(2, 8)}`;
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    width: '100%',
    fontFamily: 'var(--da-font-body)'
  };
  const labelStyle = {
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const box = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    height: 48,
    padding: '0 14px',
    background: 'var(--color-surface)',
    border: `1px solid ${error ? 'var(--da-red)' : focused ? 'var(--color-primary)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-sm)',
    boxShadow: focused ? '0 0 0 3px var(--da-petrol-50)' : 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.55 : 1
  };
  const input = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'var(--fs-body)',
    color: 'var(--text-strong)'
  };
  const sideStyle = {
    color: 'var(--text-muted)',
    fontSize: 'var(--fs-sm)',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      ...wrap,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: box
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: sideStyle
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    disabled: disabled,
    style: input,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: sideStyle
  }, suffix)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--da-red)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Daniela Aiello — Select
 * Native select styled to match Input. Options passed as [{value,label}].
 */
function Select({
  label,
  helper,
  options = [],
  id,
  disabled = false,
  placeholder,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldId = id || `da-select-${Math.random().toString(36).slice(2, 8)}`;
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    width: '100%',
    fontFamily: 'var(--da-font-body)'
  };
  const labelStyle = {
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const box = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    background: 'var(--color-surface)',
    border: `1px solid ${focused ? 'var(--color-primary)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-sm)',
    boxShadow: focused ? '0 0 0 3px var(--da-petrol-50)' : 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.55 : 1
  };
  const select = {
    appearance: 'none',
    WebkitAppearance: 'none',
    flex: 1,
    height: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: '0 38px 0 14px',
    fontFamily: 'inherit',
    fontSize: 'var(--fs-body)',
    color: 'var(--text-strong)',
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  const caret = {
    position: 'absolute',
    right: 14,
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: 'var(--text-muted)',
    fontSize: 12
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      ...wrap,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: box
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    style: select,
    defaultValue: "",
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: caret
  }, "\u25BE")), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/realestate/PropertyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Daniela Aiello — PropertyCard
 * The signature listing card: photo with optional status badge, location
 * eyebrow, project name, spec row and a footer action.
 */
function PropertyCard({
  image,
  imageAlt = '',
  badge,
  location,
  title,
  description,
  specs = [],
  price,
  footer,
  onClick,
  style,
  ...rest
}) {
  const card = {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--color-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    transition: 'box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out)',
    cursor: onClick ? 'pointer' : 'default',
    fontFamily: 'var(--da-font-body)',
    ...style
  };
  const media = {
    position: 'relative',
    aspectRatio: '4 / 3',
    background: 'var(--da-sand-100)',
    overflow: 'hidden'
  };
  const img = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };
  const badgeWrap = {
    position: 'absolute',
    top: 12,
    left: 12
  };
  const body = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: '20px 22px 22px'
  };
  const eyebrow = {
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--color-accent)'
  };
  const name = {
    fontFamily: 'var(--da-font-display)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: 'var(--fs-h4)',
    color: 'var(--text-strong)',
    lineHeight: 'var(--lh-snug)',
    margin: 0
  };
  const desc = {
    fontSize: 'var(--fs-sm)',
    color: 'var(--text-muted)',
    lineHeight: 'var(--lh-normal)'
  };
  const specRow = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 18,
    paddingTop: 14,
    marginTop: 2,
    borderTop: '1px solid var(--border-subtle)'
  };
  const specItem = {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    fontSize: 'var(--fs-sm)',
    color: 'var(--text-body)'
  };
  const footerRow = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 14,
    marginTop: 2,
    borderTop: '1px solid var(--border-subtle)'
  };
  const priceStyle = {
    fontFamily: 'var(--da-font-display)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: 'var(--fs-h4)',
    color: 'var(--color-primary)'
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    style: card,
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: media
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: img
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: badgeWrap
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: body
  }, location && /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, location), title && /*#__PURE__*/React.createElement("h3", {
    style: name
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: desc
  }, description), specs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: specRow
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: specItem
  }, s.icon, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, s.value), s.label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, s.label)))), (price || footer) && /*#__PURE__*/React.createElement("div", {
    style: footerRow
  }, price && /*#__PURE__*/React.createElement("span", {
    style: priceStyle
  }, price), footer)));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// components/realestate/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Daniela Aiello — SectionHeading
 * Eyebrow + uppercase display title with the brand's red tick, plus optional
 * lead paragraph. The recurring section opener across web and social.
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  tone = 'dark',
  tick = true,
  as = 'h2',
  style,
  ...rest
}) {
  const Tag = as;
  const onDark = tone === 'light';
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    maxWidth: 640,
    textAlign: align,
    alignItems: align === 'center' ? 'center' : 'flex-start',
    fontFamily: 'var(--da-font-body)',
    ...style
  };
  const eyebrowStyle = {
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--color-accent)'
  };
  const titleStyle = {
    fontFamily: 'var(--da-font-display)',
    fontWeight: 'var(--fw-light)',
    fontSize: 'var(--fs-h2)',
    lineHeight: 'var(--lh-snug)',
    letterSpacing: 'var(--ls-display)',
    textTransform: 'uppercase',
    margin: 0,
    color: onDark ? 'var(--da-white)' : 'var(--text-strong)'
  };
  const tickStyle = {
    display: 'inline-block',
    width: '0.42em',
    height: '0.42em',
    background: 'var(--color-accent)',
    marginLeft: '0.28em',
    verticalAlign: '0.04em'
  };
  const descStyle = {
    fontSize: 'var(--fs-lead)',
    lineHeight: 'var(--lh-relaxed)',
    color: onDark ? 'var(--da-petrol-200)' : 'var(--text-body)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: eyebrowStyle
  }, eyebrow), title && /*#__PURE__*/React.createElement(Tag, {
    style: titleStyle
  }, title, tick && /*#__PURE__*/React.createElement("span", {
    style: tickStyle
  })), description && /*#__PURE__*/React.createElement("p", {
    style: descStyle
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/realestate/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Daniela Aiello — Stat
 * Large display figure with a caption. Used in about / track-record bands.
 */
function Stat({
  value,
  label,
  tone = 'petrol',
  align = 'start',
  style,
  ...rest
}) {
  const color = {
    petrol: 'var(--color-primary)',
    red: 'var(--color-accent)',
    white: 'var(--da-white)'
  }[tone];
  const labelColor = tone === 'white' ? 'var(--da-petrol-200)' : 'var(--text-muted)';
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    textAlign: align,
    alignItems: align === 'center' ? 'center' : 'flex-start',
    fontFamily: 'var(--da-font-body)',
    ...style
  };
  const fig = {
    fontFamily: 'var(--da-font-display)',
    fontWeight: 'var(--fw-light)',
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
    lineHeight: 1,
    color,
    letterSpacing: 'var(--ls-display)'
  };
  const cap = {
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: labelColor
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: fig
  }, value), label && /*#__PURE__*/React.createElement("span", {
    style: cap
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/Chrome.jsx
try { (() => {
// Header + Footer chrome for the Daniela Aiello site kit.
const {
  Logo,
  Button,
  IconButton
} = window.DanielaAielloDesignSystem_51c558;
function Header({
  route,
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.getElementById('kit-scroll');
    if (!root) return;
    const onScroll = () => setScrolled(root.scrollTop > 20);
    root.addEventListener('scroll', onScroll);
    return () => root.removeEventListener('scroll', onScroll);
  }, []);
  const onPhoto = route === 'home' && !scrolled;
  const bar = {
    position: 'sticky',
    top: 0,
    zIndex: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'var(--header-h)',
    padding: '0 var(--container-pad)',
    background: onPhoto ? 'transparent' : 'rgba(255,255,255,0.92)',
    backdropFilter: onPhoto ? 'none' : 'saturate(140%) blur(10px)',
    borderBottom: onPhoto ? '1px solid transparent' : '1px solid var(--border-subtle)',
    transition: 'background var(--dur-med) var(--ease-out), border-color var(--dur-med) var(--ease-out)'
  };
  const navWrap = {
    display: 'flex',
    alignItems: 'center',
    gap: 30
  };
  const link = active => ({
    fontSize: 'var(--fs-sm)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    cursor: 'pointer',
    position: 'relative',
    padding: '6px 0',
    color: onPhoto ? '#fff' : active ? 'var(--color-primary)' : 'var(--text-body)',
    opacity: onPhoto && !active ? 0.85 : 1
  });
  return /*#__PURE__*/React.createElement("header", {
    style: bar
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: onPhoto ? 'white' : 'color',
    form: "full",
    height: 38
  })), /*#__PURE__*/React.createElement("nav", {
    style: navWrap
  }, window.DA_DATA.nav.map(n => /*#__PURE__*/React.createElement("span", {
    key: n.id,
    style: link(route === n.id || n.id === 'devs' && route === 'detail'),
    onClick: () => onNav(n.id)
  }, n.label, route === n.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 2,
      background: 'var(--da-red)'
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: onPhoto ? 'on-dark' : 'accent',
    size: "sm",
    onClick: () => onNav('contact')
  }, "Consultar")));
}
function Footer({
  onNav
}) {
  const wrap = {
    background: 'var(--da-petrol-900)',
    color: 'var(--da-petrol-200)',
    padding: '64px var(--container-pad) 36px'
  };
  const inner = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 48,
    justifyContent: 'space-between'
  };
  const colTitle = {
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--da-white)',
    marginBottom: 16
  };
  const item = {
    fontSize: 'var(--fs-sm)',
    color: 'var(--da-petrol-200)',
    marginBottom: 10,
    cursor: 'pointer'
  };
  const social = {
    display: 'flex',
    gap: 10,
    marginTop: 6
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    form: "full",
    height: 48
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.6,
      marginTop: 18
    }
  }, "Desarrollos & inversiones inmobiliarias en la Patagonia argentina. Vivir e invertir en la monta\xF1a."), /*#__PURE__*/React.createElement("div", {
    style: social
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Instagram",
    variant: "on-dark",
    round: true
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "instagram"
  })), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Facebook",
    variant: "on-dark",
    round: true
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "facebook"
  })), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "WhatsApp",
    variant: "on-dark",
    round: true
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Desarrollos"), window.DA_DATA.developments.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: item,
    onClick: () => onNav('detail')
  }, d.name))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Empresa"), /*#__PURE__*/React.createElement("div", {
    style: item,
    onClick: () => onNav('about')
  }, "Nosotros"), /*#__PURE__*/React.createElement("div", {
    style: item,
    onClick: () => onNav('devs')
  }, "Desarrollos"), /*#__PURE__*/React.createElement("div", {
    style: item,
    onClick: () => onNav('contact')
  }, "Contacto")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colTitle
  }, "Contacto"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...item,
      cursor: 'default'
    }
  }, "San Mart\xEDn de los Andes"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...item,
      cursor: 'default'
    }
  }, "Neuqu\xE9n, Argentina"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...item,
      cursor: 'default'
    }
  }, "+54 9 2972 000 000"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...item,
      cursor: 'default'
    }
  }, "hola@danielaaiello.ar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: '0.04em'
    }
  }, "\xA9 2026 Daniela Aiello \u2014 Desarrollos & Inversiones. Todos los derechos reservados."));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/Home.jsx
try { (() => {
// Home page for the Daniela Aiello site kit.
const {
  Button,
  Badge,
  PropertyCard,
  SectionHeading,
  Stat
} = window.DanielaAielloDesignSystem_51c558;
function Hero({
  onNav
}) {
  const sec = {
    position: 'relative',
    minHeight: 660,
    marginTop: 'calc(-1 * var(--header-h))',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage: `url(../../assets/images/stone-house-mountain.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  const scrim = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(3,39,48,0.85) 0%, rgba(3,39,48,0.35) 45%, rgba(3,39,48,0.25) 100%)'
  };
  const inner = {
    position: 'relative',
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    width: '100%',
    padding: '0 var(--container-pad) 88px',
    color: '#fff'
  };
  const eyebrow = {
    fontSize: 'var(--fs-sm)',
    fontWeight: 600,
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: '#fff',
    opacity: 0.9
  };
  const title = {
    fontFamily: 'var(--da-font-display)',
    fontWeight: 300,
    fontSize: 'var(--fs-display)',
    lineHeight: 1.04,
    letterSpacing: 'var(--ls-display)',
    textTransform: 'uppercase',
    margin: '18px 0 0',
    maxWidth: 760
  };
  const tick = {
    display: 'inline-block',
    width: '0.36em',
    height: '0.36em',
    background: 'var(--da-red)',
    marginLeft: '0.2em',
    verticalAlign: '0.06em'
  };
  const sub = {
    fontSize: 'var(--fs-lead)',
    lineHeight: 1.6,
    maxWidth: 540,
    marginTop: 22,
    color: 'rgba(255,255,255,0.88)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: sec
  }, /*#__PURE__*/React.createElement("div", {
    style: scrim
  }), /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Patagonia Argentina"), /*#__PURE__*/React.createElement("h1", {
    style: title
  }, "Calidad en cada detalle", /*#__PURE__*/React.createElement("span", {
    style: tick
  })), /*#__PURE__*/React.createElement("p", {
    style: sub
  }, "Desarrollos inmobiliarios para vivir e invertir en la monta\xF1a, con la trayectoria y el respaldo de Daniela Aiello."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('devs')
  }, "Ver desarrollos"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Agendar visita"))));
}
function Featured({
  onNav
}) {
  const sec = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '96px var(--container-pad)'
  };
  const head = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 24,
    marginBottom: 44,
    flexWrap: 'wrap'
  };
  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 28
  };
  return /*#__PURE__*/React.createElement("section", {
    style: sec
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nuestros desarrollos",
    title: "Proyectos destacados",
    description: "Una selecci\xF3n de obras en pozo, en construcci\xF3n y listas para habitar."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('devs'),
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    })
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, window.DA_DATA.developments.map(d => /*#__PURE__*/React.createElement(PropertyCard, {
    key: d.id,
    image: d.image,
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: d.status.tone,
      solid: d.status.tone === 'red'
    }, d.status.label),
    location: d.location,
    title: d.name,
    description: d.description,
    specs: d.specs.slice(0, 2),
    price: d.price,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => onNav('detail')
    }, "Ver m\xE1s"),
    onClick: () => onNav('detail')
  }))));
}
function TrackRecord() {
  const sec = {
    background: 'var(--da-petrol)',
    color: '#fff'
  };
  const inner = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '88px var(--container-pad)',
    display: 'grid',
    gridTemplateColumns: '1.1fr 1fr',
    gap: 64,
    alignItems: 'center'
  };
  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px 48px',
    marginTop: 16
  };
  const photo = {
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-image)',
    aspectRatio: '4/5'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: sec
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    eyebrow: "Nosotros",
    title: "Trayectoria que respalda cada metro\xB2",
    description: "M\xE1s de quince a\xF1os desarrollando proyectos que combinan dise\xF1o, naturaleza y rentabilidad en el coraz\xF3n de los Andes."
  }), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, window.DA_DATA.stats.map((s, i) => /*#__PURE__*/React.createElement(Stat, {
    key: i,
    value: s.value,
    label: s.label,
    tone: "white"
  })))), /*#__PURE__*/React.createElement("div", {
    style: photo
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/interior-bedroom.png",
    alt: "Interior",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))));
}
function CtaBand({
  onNav
}) {
  const sec = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '96px var(--container-pad)'
  };
  const card = {
    position: 'relative',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    padding: '72px var(--container-pad)',
    textAlign: 'center',
    color: '#fff',
    backgroundImage: 'linear-gradient(rgba(3,39,48,0.78), rgba(3,39,48,0.78)), url(../../assets/images/stone-house-mountain.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: sec
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    align: "center",
    eyebrow: "Hablemos",
    title: "\xBFListo para invertir en la monta\xF1a?",
    description: "Coordin\xE1 una visita o ped\xED el brochure de cualquiera de nuestros desarrollos.",
    style: {
      margin: '0 auto',
      maxWidth: 620
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('contact')
  }, "Contactar"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    onClick: () => onNav('devs')
  }, "Ver desarrollos"))));
}
function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Featured, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(TrackRecord, null), /*#__PURE__*/React.createElement(CtaBand, {
    onNav: onNav
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/Inner.jsx
try { (() => {
// Inner pages: Developments listing, Development detail, About, Contact.
const {
  Button,
  Badge,
  PropertyCard,
  SectionHeading,
  Stat,
  Input,
  Select,
  Checkbox
} = window.DanielaAielloDesignSystem_51c558;
function PageBanner({
  eyebrow,
  title,
  description
}) {
  const sec = {
    background: 'var(--da-sand-100)',
    borderBottom: '1px solid var(--border-subtle)'
  };
  const inner = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '64px var(--container-pad)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: sec
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: eyebrow,
    title: title,
    description: description
  })));
}

/* ---------------- Developments listing ---------------- */
function Developments({
  onNav
}) {
  const all = [...window.DA_DATA.developments, ...window.DA_DATA.developments];
  const sec = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '40px var(--container-pad) 96px'
  };
  const filters = {
    display: 'flex',
    gap: 16,
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    padding: '22px 24px',
    background: 'var(--color-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    marginBottom: 40
  };
  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 28
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageBanner, {
    eyebrow: "Cat\xE1logo",
    title: "Desarrollos",
    description: "Explor\xE1 nuestras obras en la Patagonia argentina por localidad y estado."
  }), /*#__PURE__*/React.createElement("section", {
    style: sec
  }, /*#__PURE__*/React.createElement("div", {
    style: filters
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Localidad",
    placeholder: "Todas las zonas",
    options: [{
      value: 'sma',
      label: 'San Martín de los Andes'
    }, {
      value: 'chap',
      label: 'Chapelco'
    }, {
      value: 'villa',
      label: 'Villa La Angostura'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 180px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Estado",
    placeholder: "Todos",
    options: [{
      value: 'pozo',
      label: 'En pozo'
    }, {
      value: 'obra',
      label: 'En obra'
    }, {
      value: 'lista',
      label: 'Disponible'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Buscar",
    placeholder: "Nombre del proyecto",
    suffix: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search"
    })
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Filtrar")), /*#__PURE__*/React.createElement("div", {
    style: grid
  }, all.map((d, i) => /*#__PURE__*/React.createElement(PropertyCard, {
    key: i,
    image: d.image,
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: d.status.tone,
      solid: d.status.tone === 'red'
    }, d.status.label),
    location: d.location,
    title: d.name,
    description: d.description,
    specs: d.specs.slice(0, 2),
    price: d.price,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => onNav('detail')
    }, "Ver m\xE1s"),
    onClick: () => onNav('detail')
  })))));
}

/* ---------------- Development detail ---------------- */
function DevelopmentDetail({
  onNav
}) {
  const d = window.DA_DATA.developments[0];
  const gallery = window.DA_DATA.gallery;
  const [active, setActive] = React.useState(0);
  const sec = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '32px var(--container-pad) 96px'
  };
  const crumb = {
    fontSize: 'var(--fs-xs)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: 22,
    display: 'flex',
    gap: 8
  };
  const crumbLink = {
    color: 'var(--color-primary)',
    cursor: 'pointer'
  };
  const titleRow = {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    flexWrap: 'wrap',
    marginBottom: 8
  };
  const title = {
    fontFamily: 'var(--da-font-display)',
    fontWeight: 300,
    fontSize: 'var(--fs-h1)',
    letterSpacing: 'var(--ls-display)',
    textTransform: 'uppercase',
    color: 'var(--text-strong)',
    margin: 0
  };
  const loc = {
    fontSize: 'var(--fs-sm)',
    color: 'var(--da-red)',
    fontWeight: 600,
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    marginBottom: 28
  };
  const mainImg = {
    width: '100%',
    aspectRatio: '16/10',
    objectFit: 'cover',
    borderRadius: 'var(--radius-md)',
    display: 'block',
    boxShadow: 'var(--shadow-md)'
  };
  const thumbs = {
    display: 'flex',
    gap: 12,
    marginTop: 12
  };
  const thumb = i => ({
    width: 96,
    height: 70,
    objectFit: 'cover',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    border: `2px solid ${i === active ? 'var(--color-primary)' : 'transparent'}`,
    opacity: i === active ? 1 : 0.7
  });
  const layout = {
    display: 'grid',
    gridTemplateColumns: '1.6fr 1fr',
    gap: 48,
    marginTop: 44,
    alignItems: 'start'
  };
  const specGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 18,
    margin: '32px 0',
    padding: '26px 0',
    borderTop: '1px solid var(--border-subtle)',
    borderBottom: '1px solid var(--border-subtle)'
  };
  const amenities = ['Bosque nativo', 'Seguridad 24 h', 'Quincho y SUM', 'Cocheras cubiertas', 'Ski room', 'Senderos privados'];
  const aGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '14px 28px',
    marginTop: 18
  };
  const aItem = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 'var(--fs-body)',
    color: 'var(--text-body)'
  };
  const aside = {
    position: 'sticky',
    top: 96,
    background: 'var(--color-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-md)',
    padding: 28
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: sec
  }, /*#__PURE__*/React.createElement("div", {
    style: crumb
  }, /*#__PURE__*/React.createElement("span", {
    style: crumbLink,
    onClick: () => onNav('home')
  }, "Inicio"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: crumbLink,
    onClick: () => onNav('devs')
  }, "Desarrollos"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, d.name)), /*#__PURE__*/React.createElement("div", {
    style: titleRow
  }, /*#__PURE__*/React.createElement("h1", {
    style: title
  }, d.name), /*#__PURE__*/React.createElement(Badge, {
    tone: d.status.tone,
    solid: d.status.tone === 'red'
  }, d.status.label)), /*#__PURE__*/React.createElement("div", {
    style: loc
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 14,
      height: 14,
      verticalAlign: '-2px'
    }
  }), " ", d.location), /*#__PURE__*/React.createElement("div", {
    style: layout
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: gallery[active],
    alt: "",
    style: mainImg
  }), /*#__PURE__*/React.createElement("div", {
    style: thumbs
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: g,
    alt: "",
    style: thumb(i),
    onClick: () => setActive(i)
  }))), /*#__PURE__*/React.createElement("div", {
    style: specGrid
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1\u20133",
    label: "ambientes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "45\u2013120",
    label: "m\xB2 cubiertos"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "24",
    label: "unidades"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2026",
    label: "entrega"
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    title: "El proyecto",
    tick: false,
    as: "h2",
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: 620
    }
  }, "Vivre | Andes es un condominio de monta\xF1a a pasos del centro de San Mart\xEDn de los Andes. Arquitectura en madera y piedra que dialoga con el bosque, grandes ventanales y espacios comunes pensados para disfrutar la naturaleza todo el a\xF1o."), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--da-font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-strong)',
      marginTop: 36
    }
  }, "Amenities"), /*#__PURE__*/React.createElement("div", {
    style: aGrid
  }, amenities.map(a => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: aItem
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 18,
      height: 18,
      color: 'var(--da-red)'
    }
  }), a)))), /*#__PURE__*/React.createElement("aside", {
    style: aside
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Valor desde"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--da-font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-h2)',
      color: 'var(--color-primary)',
      margin: '6px 0 22px'
    }
  }, "USD 145.000"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "vos@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    prefix: "+54",
    placeholder: "9 2972 ..."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quiero recibir el brochure por email",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true
  }, "Solicitar informaci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "download"
    })
  }, "Descargar brochure"))))));
}

/* ---------------- About ---------------- */
function About() {
  const band = {
    background: 'var(--da-petrol)',
    color: '#fff'
  };
  const inner = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '88px var(--container-pad)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 56,
    alignItems: 'center'
  };
  const statGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px 48px',
    marginTop: 8
  };
  const intro = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '96px var(--container-pad)',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: 56,
    alignItems: 'center'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageBanner, {
    eyebrow: "Nosotros",
    title: "Desarrollos & Inversiones",
    description: "Una desarrolladora patag\xF3nica con foco en el dise\xF1o, la naturaleza y la rentabilidad."
  }), /*#__PURE__*/React.createElement("section", {
    style: intro
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-image)',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/interior-living.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nuestra mirada",
    title: "Construimos lugares para habitar la monta\xF1a",
    description: "Cada desarrollo nace de la lectura del entorno andino. Trabajamos con materiales nobles \u2014madera, piedra, vidrio\u2014 y equipos locales para crear espacios que envejecen bien y revalorizan su entorno."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      marginTop: 18
    }
  }, "Acompa\xF1amos a cada cliente desde la primera consulta hasta la entrega de llaves, con informaci\xF3n clara y planes de pago a medida."))), /*#__PURE__*/React.createElement("section", {
    style: band
  }, /*#__PURE__*/React.createElement("div", {
    style: inner
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "light",
    eyebrow: "En n\xFAmeros",
    title: "Trayectoria"
  }), /*#__PURE__*/React.createElement("div", {
    style: statGrid
  }, window.DA_DATA.stats.map((s, i) => /*#__PURE__*/React.createElement(Stat, {
    key: i,
    value: s.value,
    label: s.label,
    tone: "white"
  }))))));
}

/* ---------------- Contact ---------------- */
function Contact() {
  const sec = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '40px var(--container-pad) 96px',
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: 64,
    alignItems: 'start'
  };
  const info = {
    display: 'flex',
    flexDirection: 'column',
    gap: 22
  };
  const row = {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start'
  };
  const ico = {
    width: 38,
    height: 38,
    flex: '0 0 auto',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--da-petrol-50)',
    color: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const k = {
    fontSize: 'var(--fs-xs)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const v = {
    fontSize: 'var(--fs-body)',
    color: 'var(--text-strong)',
    fontWeight: 500
  };
  const form = {
    background: 'var(--color-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-md)',
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageBanner, {
    eyebrow: "Contacto",
    title: "Hablemos",
    description: "Coordin\xE1 una visita, ped\xED un brochure o consult\xE1 por oportunidades de inversi\xF3n."
  }), /*#__PURE__*/React.createElement("section", {
    style: sec
  }, /*#__PURE__*/React.createElement("div", {
    style: info
  }, /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("div", {
    style: ico
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: k
  }, "Oficina"), /*#__PURE__*/React.createElement("div", {
    style: v
  }, "San Mart\xEDn de los Andes, Neuqu\xE9n"))), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("div", {
    style: ico
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: k
  }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("div", {
    style: v
  }, "+54 9 2972 000 000"))), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("div", {
    style: ico
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: k
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    style: v
  }, "hola@danielaaiello.ar"))), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("div", {
    style: ico
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: k
  }, "Horario"), /*#__PURE__*/React.createElement("div", {
    style: v
  }, "Lun a Vie \xB7 9 a 18 h"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      marginTop: 8,
      aspectRatio: '16/10'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/stone-house-mountain.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: form
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Apellido",
    placeholder: "Tu apellido"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "vos@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    prefix: "+54",
    placeholder: "9 2972 ..."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Desarrollo de inter\xE9s",
    placeholder: "Eleg\xED un proyecto",
    options: window.DA_DATA.developments.map(d => ({
      value: d.id,
      label: d.name
    }))
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mensaje",
    placeholder: "Contanos qu\xE9 est\xE1s buscando"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Acepto recibir novedades y oportunidades de inversi\xF3n",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true
  }, "Enviar consulta"))));
}
Object.assign(window, {
  Developments,
  DevelopmentDetail,
  About,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/Inner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sitio-web/data.js
try { (() => {
// Daniela Aiello — sample content for the marketing-site UI kit.
// Imagery paths are relative to ui_kits/sitio-web/index.html
const IMG = '../../assets/images/';
window.DA_DATA = {
  nav: [{
    id: 'home',
    label: 'Inicio'
  }, {
    id: 'devs',
    label: 'Desarrollos'
  }, {
    id: 'about',
    label: 'Nosotros'
  }, {
    id: 'contact',
    label: 'Contacto'
  }],
  developments: [{
    id: 'vivre-andes',
    name: 'Vivre | Andes',
    location: 'San Martín de los Andes',
    status: {
      label: 'En pozo',
      tone: 'red'
    },
    image: IMG + 'aerial-development.png',
    description: 'Condominio de montaña a pasos del centro, rodeado de bosque nativo.',
    price: 'Desde USD 145.000',
    specs: [{
      value: '1–3',
      label: 'amb.'
    }, {
      value: '45–120',
      label: 'm²'
    }, {
      value: '2026',
      label: 'entrega'
    }]
  }, {
    id: 'chapelco-bosque',
    name: 'Bosque Chapelco',
    location: 'Chapelco',
    status: {
      label: 'En obra',
      tone: 'petrol'
    },
    image: IMG + 'stone-house-mountain.png',
    description: 'Casas de piedra y madera con vistas abiertas al cerro.',
    price: 'Desde USD 320.000',
    specs: [{
      value: '3–4',
      label: 'dorm.'
    }, {
      value: '180–240',
      label: 'm²'
    }, {
      value: '2025',
      label: 'entrega'
    }]
  }, {
    id: 'lacar-lofts',
    name: 'Lácar Lofts',
    location: 'San Martín de los Andes',
    status: {
      label: 'Disponible',
      tone: 'success'
    },
    image: IMG + 'facade-detail.png',
    description: 'Lofts de diseño con terminaciones en madera y grandes ventanales.',
    price: 'Desde USD 198.000',
    specs: [{
      value: 'Mono–2',
      label: 'amb.'
    }, {
      value: '38–86',
      label: 'm²'
    }, {
      value: 'Lista',
      label: 'entrega'
    }]
  }],
  // detail view uses the first development
  gallery: [IMG + 'facade-warm-wood.png', IMG + 'interior-living.png', IMG + 'interior-bedroom.png', IMG + 'facade-detail.png'],
  stats: [{
    value: '+15',
    label: 'años de trayectoria'
  }, {
    value: '8',
    label: 'desarrollos entregados'
  }, {
    value: '+400',
    label: 'familias'
  }, {
    value: '100%',
    label: 'en Patagonia'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sitio-web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

})();
