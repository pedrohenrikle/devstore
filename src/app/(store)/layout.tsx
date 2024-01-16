import Header from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    /*
     * Mesmo o provider sendo um client component, devido a propriedade 'child'
     * os demais itens dentro dele não são client components, e sim server components
     */
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
