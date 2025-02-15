import type { W3mModal } from '@web3modal/ui'

/**
 * Component
 */
export function Web3Modal(props: JSX.IntrinsicElements['w3m-modal']) {
  return <w3m-modal {...props} />
}

/**
 * Types
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-modal': Partial<W3mModal>
    }
  }
}
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-modal': Partial<W3mModal>
    }
  }
}
