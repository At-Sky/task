import { Inter } from '@next/font/google'
import CardList from "@/components/CardList";
import Card from "@/components/Card";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
      <>
        <CardList/>
      </>
  )
}
