export const getUnits = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(units);
    }, 1000);
  });
};

const units = [
  {
    bath_count: 1,
    bed_count: 2,
    bin: 1000036,
    size: 13325,
    building: {
      address: "70 BROAD STREET",
    },
    unit_number: "10A",
  },
  {
    bath_count: 1,
    bed_count: 3,
    bin: 1000301,
    size: null,
    building: {
      address: "350 ALBANY STREET",
    },
    unit_number: "10",
  },
  {
    bath_count: 1,
    bed_count: 2,
    bin: 1000794,
    size: null,
    building: {
      address: "88 GREENWICH STREET",
    },
    unit_number: "11A",
  },
  {
    bath_count: 1,
    bed_count: 1,
    bin: 1000829,
    size: null,
    building: {
      address: "67 WALL STREET",
    },
    unit_number: "21F",
  },
  {
    bath_count: 3,
    bed_count: 3,
    bin: 1001007,
    size: 2276,
    building: {
      address: "70 PINE STREET",
    },
    unit_number: "35H",
  },
  {
    bath_count: 2,
    bed_count: 2,
    bin: 1001263,
    size: 1426,
    building: {
      address: "111 FULTON STREET",
    },
    unit_number: null,
  },
];
