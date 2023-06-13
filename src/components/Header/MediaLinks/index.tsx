import Icon from '@/components/Icon'
import Link from '@/components/UI/Link'
import styles from './MediaLinks.module.scss'

function MediaLinks() {

  const MediaLinks = [
    { href: 'https://rastmobile.com/', media: 'youtube' },
    { href: 'https://www.instagram.com/mobilerast/', media: 'instagram' },
    { href: 'https://www.behance.net/rastmobile', media: 'behance' },
    { href: 'https://www.linkedin.com/company/rastmobile/', media: 'linkedin' },
  ]

  return (
    <div className={styles.mediaLinks}>
      {MediaLinks.map(link => (
        <Link key={link.media} href={link.href} target='_blank' className={styles.media}>
          <Icon icon={link.media} size={12} />
        </Link>
      ))}
    </div>
  )
}

export default MediaLinks