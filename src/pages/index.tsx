import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { Column, List } from '../components'
import { prisma } from '../lib/prisma'
import { StaticProps } from '../lib/types'

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return { props: {} }
}

export default function IndexPage(props: StaticProps<typeof getStaticProps>) {
  return <p>Index</p>
}
