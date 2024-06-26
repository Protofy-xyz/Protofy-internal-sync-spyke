import DevicesPages from 'protolib/bundles/devices/adminPages'
import Head from 'next/head'
import { useRedirectToEnviron } from 'protolib'

export default function Page(props:any) {
  const PageComponent = DevicesPages['deviceSdks/**'].component
  useRedirectToEnviron()
  return (
    <>
      <Head>
        <title>Protofy - Devices SDK</title>
      </Head>
      <PageComponent {...props} />
    </>
  )
}
