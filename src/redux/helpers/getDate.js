export const getDate = (date) =>{
    if (!date || !date.seconds) {
        return null;
      }
    const newDate = new Date(date.seconds * 1000);
    const hours = ("0" + newDate.getHours()).slice(-2);
    const minutes = ("0" + newDate.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;

}