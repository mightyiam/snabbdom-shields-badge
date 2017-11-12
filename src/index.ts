import badge, { BadgeName, BadgeArgs, Options, BadgeData } from 'shields-badge-data'
import { h } from 'snabbdom'
import { VNode } from 'snabbdom/vnode'

export type BadgeInput = [ BadgeName, BadgeArgs, Options]

export default (badgeInput: BadgeInput): VNode => {
  const { title, image, link } = badge(badgeInput[0], badgeInput[1], badgeInput[2])
  return h(
    'a',
    {
      attrs: {
        href: link.href
      }
    },
    [
      h(
        'img',
        {
          attrs: {
            alt: title,
            src: image.href
          }
        }
      )
    ]
  )
}
