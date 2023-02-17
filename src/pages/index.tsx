import { Inter } from '@next/font/google'
import CardList from "@/pages/components/CardList";
import Card from "@/pages/components/Card";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
      <>
        <CardList/>
      </>
  )
}
