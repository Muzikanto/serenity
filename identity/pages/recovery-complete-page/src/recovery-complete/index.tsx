import React                from 'react'
import { useIntl }          from 'react-intl'

import { RecoveryComplete } from './RecoveryComplete'

const Page = (props: any) => {
  const intl = useIntl()

  return <RecoveryComplete intl={intl} {...props} />
}

export default Page
