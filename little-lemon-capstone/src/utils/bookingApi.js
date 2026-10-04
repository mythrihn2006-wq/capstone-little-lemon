const baseTimes = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

export function initializeTimes() {
  return baseTimes.slice(0, 7);
}

export function updateTimes(date) {
  if (!date) {
    return initializeTimes();
  }

  const day = new Date(`${date}T00:00:00`).getDay();

  if (day === 5 || day === 6) {
    return [
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
    ];
  }

  return [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];
}

export function submitAPI(formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Boolean(formData.date && formData.time && formData.guests));
    }, 600);
  });
}