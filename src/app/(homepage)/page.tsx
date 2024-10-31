import FamilyMemberCard from '@local/components/FamilyMemberCard/FamilyMemberCard'
import styles from '@local/styles/Home.module.scss'

export default function HomepagePage() {
  return (
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
          <FamilyMemberCard link="/home" icon="🏠" name="Home" description="Fits, Energy, Weather, etc ..." />
        </div>

      </main>
  )
}
