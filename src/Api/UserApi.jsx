import axios from "axios"

export const getOtp = (mobile) => {
  let value = { mobile: mobile }
  const getOtpApi = async () => {
    try {
      const data = await axios.post("http://localhost:8080/api/auth/otp", value)
    } catch (err) {
      console.log(err)
    }
  }
  getOtpApi()
}
