import test from 'ava'
import subject from '.'
import { h } from 'snabbdom'

test('simple', t => {
  const actual = subject([
    'customBadge',
    {
      subject: 'thingo',
      status: 'ok',
      color: 'orange',
      title: 'thingo is ok',
      link: 'http://example.com'
    },
    {
      format: 'png'
    }
  ])

  const expected = h(
    'a',
    { attrs: { href: 'http://example.com/' } },
    [
      h(
        'img',
        {
          attrs: {
            alt: 'thingo is ok',
            src: 'https://img.shields.io/badge/thingo-ok-orange.png'
          }
        }
      )
    ]
  )

  t.deepEqual(actual, expected)
})

test('`options: {}`', t => {
  const actual = subject(
    [
      'customBadge',
      {
        subject: 'thingo',
        status: 'ok',
        color: 'orange',
        title: 'thingo is ok',
        link: 'http://example.com'
      },
      {
        format: 'png'
      }
    ],
    {}
  )

  const expected = h(
    'a',
    { attrs: { href: 'http://example.com/' } },
    [
      h(
        'img',
        {
          attrs: {
            alt: 'thingo is ok',
            src: 'https://img.shields.io/badge/thingo-ok-orange.png'
          }
        }
      )
    ]
  )

  t.deepEqual(actual, expected)
})

test('`options.a: false`', t => {
  const actual = subject(
    [
      'customBadge',
      {
        subject: 'thingo',
        status: 'ok',
        color: 'orange',
        title: 'thingo is ok',
        link: 'http://example.com'
      },
      {
        format: 'png'
      }
    ],
    {
      a: false
    }
  )

  const expected = h(
    'img',
    {
      attrs: {
        alt: 'thingo is ok',
        src: 'https://img.shields.io/badge/thingo-ok-orange.png'
      }
    }
  )

  t.deepEqual(actual, expected)
})
