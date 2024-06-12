function getDefaultState(state) {
  if (state === null || typeof state !== "object") {
    const defaultState = { logged: false, username: "", id: -1 };
    return defaultState;
  }
  return state;
}

export default getDefaultState;

/*
USED TO GET THE DEFAULT STATE ON THE APP PAGE.
THIS IS NECESSARY OTHERWISE THE PROGRAM CRASHES AS IT TRIES TO DECONSTRUCT THE STATE OBJECT
SAID STATE OBJECT IS USED TO VERIFY IF THE USER HAS LOGGED IN.
IF THE USER HASN'T LOGGED IN, HE'S FORCED TO VISIT THE LOGIN FORM
*/
