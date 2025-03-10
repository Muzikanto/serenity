import { Field, ObjectType } from '@nestjs/graphql'

import { Portfolio } from './Portfolio'
import { UpdatePortfolioErrors } from './UpdatePortfolioErrors'

@ObjectType()
export class UpdatePortfolioResponse {
  @Field(type => Portfolio, { nullable: true })
  result?: Portfolio

  @Field(type => UpdatePortfolioErrors, { nullable: true })
  errors?: UpdatePortfolioErrors
}
