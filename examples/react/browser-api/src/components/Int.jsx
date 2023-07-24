import { useEffect, useState } from "react"

const europeOptions = {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
}

const usaOptions = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
}

const colombiaOptions = {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
}

const options = {
  'en-US': usaOptions,
  'en-GB': europeOptions,
  'es-CO': colombiaOptions,
}


const InternationalizationApiExample = () => {
  const [currency, setCurrency] = useState('')
  const [language, setLanguage] = useState('')
  const [myDate, setMyDate] = useState('')

  useEffect(() => {
    const lang = navigator.language
    const currency = new Intl.NumberFormat(lang, colombiaOptions).format(326255.3563)
    const dateOps = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      days: 'numeric'
    }
    const date = new Intl.DateTimeFormat(lang, dateOps).format(Date.now())

    setCurrency(currency)
    setLanguage(lang)
    setMyDate(date)
  }, [])


  return(
    <div>
      <h1>Internationalization Browser Api</h1>
      <p>
        Currency: {currency}
      </p>

      <p>
        Language: {language}
      </p>

      <p>
        Date: {myDate}
      </p>
    </div>
  )
}

export default InternationalizationApiExample
