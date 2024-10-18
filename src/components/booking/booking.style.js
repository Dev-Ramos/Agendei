import { COLORS, FONT_SIZE } from "../../constants/theme";

export const style = {
  container:{
    flex: 1,
    backgorundColor: COLORS.white,
    padding: 8,
    borderTopWidth: 1,
    borderColor: COLORS.gray4,
  },
  container2:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infos:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 5
  },
  text: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3
  },
  title:{
    fontSize: FONT_SIZE.lg,
    color: COLORS.gray1,
    fontWeight: 500
  },
  icon:{
    width: 25,
    height: 25
  }
}