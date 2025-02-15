import type { W3mConnectButton } from '@web3modal/ui'

/**
 * Component
 */
export function ConnectButton(props: JSX.IntrinsicElements['w3m-connect-button']) {
  return <w3m-connect-button {...props} />
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-connect-button': Pick<W3mConnectButton, 'label'>
    }
  }
}
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-connect-button': Pick<W3mConnectButton, 'label'>
    }
  }
}
