const getTime = {
  caculateTime: function (totalseconds) {
    const day = 86400;
    const hour = 3600;
    const minute = 60;

    const daysout = Math.floor(totalseconds / day);
    const hoursout = Math.floor((totalseconds - daysout * day) / hour);
    const minutesout = Math.floor(
      (totalseconds - daysout * day - hoursout * hour) / minute,
    );
    const secondsout =
      totalseconds - daysout * day - hoursout * hour - minutesout * minute;

    const dayString = daysout
      ? `${daysout < 10 ? `0${daysout}` : daysout}:`
      : '';
    const hourString = hoursout
      ? `${hoursout < 10 ? `0${hoursout}` : hoursout}:`
      : '';
    const minuteString = `${minutesout < 10 ? `0${minutesout}` : minutesout}:`;
    const secondString = `${secondsout < 10 ? `0${secondsout}` : secondsout}`;

    return ` ${dayString}${hourString}${minuteString}${secondString}`;
  },
};

export default getTime;
