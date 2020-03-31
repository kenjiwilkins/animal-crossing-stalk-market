
export const activateGeod = kabu => ({
  type: 'ACTIVATE_GEOD',
  kabu,
});

export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});
export const setSunday = (price) => ({
    type: 'SET_SUNDAY',
    price,
  })

export const setMondayAm = (price) => ({
  type: 'SET_MON_AM',
  price,
})

export const setMondayPm = price => ({
  type: "SET_MON_PM",
  price,
})

export const setTuesdayAm = price => ({
  type:"SET_TUE_AM",
  price,
})

export const setTuesdayPm = price => ({
  type:"SET_TUE_PM",
  price,
})

export const setWednesdayAm = price => ({
  type:"SET_WED_AM",
  price,
})

export const setWednesdayPm = price => ({
  type:"SET_WED_PM",
  price,
})

export const setThursdayAm = price => ({
  type:"SET_THUR_AM",
  price,
})

export const setThursdayPm = price => ({
  type:"SET_THUR_PM",
  price,
})

export const setFridayAm = price => ({
  type:"SET_FRI_AM",
  price,
})

export const setFridayPm = price => ({
  type:"SET_FRI_PM",
  price,
})

export const setSaturdayAm = price => ({
  type:"SET_SAT_AM",
  price,
})

export const setSaturdayPm = price => ({
  type:"SET_SAT_PM",
  price,
})

export const setKabuAmount = price => ({
  type:"SET_KABU_AMOUNT",
  price,
})

export const reset = () => ({
  type:"RESET"
})
