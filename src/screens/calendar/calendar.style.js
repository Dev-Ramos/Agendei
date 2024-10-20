import { COLORS, FONT_SIZE} from '../../constants/theme.js'

export const styles = {
  container: {
    flex: 1, 
    backgroundColor: COLORS.white,
    padding: 20,
    justifyContent: 'space-between'
  },
  theme: {
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue
  },
  textHour: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORS.gray2,
    marginTop: 30
  }
}