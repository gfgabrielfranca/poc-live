import Image from 'next/image'
import styles from '../../styles/home.module.css'
import { Theme } from './_app'

type HomeProps = {
  theme: Theme
}

export default function HomePage({ theme }: HomeProps) {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeHeader} style={{ backgroundColor: theme.backgroundColor }}>
          <header>
            <div>
              <Image 
                src={theme.logo}
                alt="Santander" 
                width={160} 
                height={28} 
              />
            </div>
          </header>
          <div className={styles.live}>
            <Image 
              src={theme.livePlaceholder}
              alt="live"
              width={1200}
              height={640}
            />
          </div>
        </div>
        <div className={styles.homeBody}>
          <div>
            <span className={styles.liveTag}>AO VIVO</span>
            <h1 className={styles.liveTitle}>Investimentos: Existem oportunidades no mercado de ações neste ano?</h1>
            {/* <p className={styles.liveDescription}>
              Renato Chanes, Estrategista para Pessoa Física da Santander Corretora, e Ricardo Peretti, Estrategist a Institucional da Santander Corretora, falarão sobre o tema em uma live exclusiva.
              <br /> <br />
              Responda nossa pesquisa: <a href="#" style={{ color: theme.primaryColor }}>https:forms.gle/bDBNwWTvg9jBL2qH9</a> 
            </p> */}
          </div>
          <div className={styles.liveBanner}>
            <Image src={theme.banner} alt="banner" width={358} height={234} />
          </div>
        </div>
        <div className={styles.homeFooter}>
          <span>© 2021 Nome do Cliente</span>
          <span>Plataforma: <a href="#">Netshow.me</a></span>
        </div>
      </div>
    </>
  )
}