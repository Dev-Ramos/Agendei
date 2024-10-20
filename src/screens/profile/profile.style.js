import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    backgoundColor: COLORS.white,
    flex: 1,
    padding: 12
  },
  item: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray4,
    padding: 16,
    gap: 4
  },
  title: {
    fontSize: FONT_SIZE.xl,
    color: COLORS.blue,
    marginTop: 16,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 600,
  },
  tipoInfo:{
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3
  },
  info:{
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1
  }
}