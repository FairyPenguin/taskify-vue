export interface Job {
  title: string
  type: string
  location: string
  description: string
  salary: string
  company: {
    name: string
    description: string
    contactEmail: string
    contactPhone: string
  }
  id: string
}

export interface Company {
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}
