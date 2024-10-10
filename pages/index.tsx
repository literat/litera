import { Inter } from 'next/font/google'
import Head from 'next/head'
import FamilyMemberCard from '../components/FamilyMemberCard/FamilyMemberCard'
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Litera.me</title>
        <meta name="description" content="Litera Family Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Litera.me
          </p>
          <div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Litera family
            </a>
          </div>
        </div>

        <div className={styles.gridHalfs}>
          <FamilyMemberCard link="https://literat.dev/" icon="👨" name="Tomáš" description="Fullstack Engineer, Whitewater kayaker, Scout" />
          <FamilyMemberCard link="/" icon="👩" name="Dita" description="Architect" />
        </div>

        <div className={styles.gridThirds}>
          <FamilyMemberCard link="/" icon="👦" name="Jonáš" description="" />
          <FamilyMemberCard link="/" icon="👧" name="Ida" description="" />
          <FamilyMemberCard link="/" icon="🧒" name="Ela" description="" />
        </div>

        <div className={styles.fullWidth}>
          <FamilyMemberCard link="/" icon="🐶" name="Charlie" description="Czech Spotted Dog" />
        </div>

        <div className={styles.fullWidth}>
          <FamilyMemberCard link="/" icon="🏠" name="Home" description="Fits, Energy, Weather, etc ..." />
        </div>

      </main>
    </>
  )
}
