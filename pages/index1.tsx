/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import  {Category, PrismaClient, Product} from '@prisma/client'
import React, { Component, useEffect } from 'react'
import Select from 'react-select'

const Home: NextPage = ({categories}: Category[] | any) => {
  const options: any = []
  useEffect(() => {
    setOptions()
  }, [options])
  const setOptions = () => {
    categories.forEach((category: any) => {
      options.push({
        value: category.id,
        label: category.name
      })
    });
  }
  return (
    <div>
      <Select options={options} />
    </div>
  )
}

export async function getServerSideProps() {

  const prisma = new PrismaClient()

  const categories = await prisma.category.findMany({
    include: {
      products: true,
    }
  })

  return {props: {
    categories: categories,
  }}
} 

export default Home
