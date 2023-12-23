export const userToken = (data) => {
    return {
      type: "TOKEN",
      payload: data,
    }
  }

  export const userRoles = (data) => {
    return {
      type: "ROLES",
      payload: data,
    }
  }

  export const userData = (data) => {
    return {
      type: "USER",
      payload: data,
    }
  }