export const formatStringDate = (date: Date) => {
  if (!date) throw new Error('date is not defined')
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDate()

  return `${year}年${month}月${day}日`
}

export const formatStringDateAndTime = (date: Date) => {
  if (!date) throw new Error('date is not defined')
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDate()
  const hour = newDate.getHours()
  const minutes = newDate.getMinutes()

  return `${year}年${month}月${day}日 ${hour}時 ${minutes}分`
}
