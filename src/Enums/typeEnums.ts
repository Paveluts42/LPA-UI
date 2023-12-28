enum Type {
  main = 'main',
  info = 'info',
  warning = 'warning',
  success = 'success',
  delete = 'delete',
}
export type TypeEnums = keyof typeof Type;

enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',

}
export type SizeEnums = keyof typeof Size;

enum Theme {
  light = 'light',
  dark = 'dark',
}
export type ThemeEnums = keyof typeof Theme;
