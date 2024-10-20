import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  doctor: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 8,
    paddingTop: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: COLORS.gray4,
  },
  name:{
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginTop: 5
  },
  speciality: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8
  }
}