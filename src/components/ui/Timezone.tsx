import moment from 'moment-timezone'
import { useEffect, useState, type FC } from 'react'

export const Timezone: FC<{ timezone: string }> = ({ timezone }) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone)
      setDateTime(now.format('dddd, DD MMMM YYYY [a] h:mm:ss A'))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])
  
  return (
    <div>
    <p>{dateTime}</p>
    <p className="text-sm text-gray-500">Ho Chi Minh, Viet Nam</p>
  </div>
  )
}
