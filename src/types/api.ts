export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  image: {
    alternativeText: string
    url: string
  }
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: [{ icon: LogoProps; title: string }]
}

export type SectionConceptsProps = {
  title: string
  concepts: [{ title: string }]
}

export type SectionModulesProps = {
  title: string
  modules: [{ title: string; subtitle: string; description: string }]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: [
    {
      photo: LogoProps
      name: string
      role: string
      socialLinks: [
        {
          title: string
          url: string
        }
      ]
      description: string
    }
  ]
}

export type SectionReviewsProps = {
  title: string
  reviews: [
    {
      name: string
      photo: LogoProps
      text: string
    }
  ]
}

export type SectionFaqProps = {
  title: string
  questions: [
    {
      question: string
      answer: string
    }
  ]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
