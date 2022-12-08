import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Arrow } from 'src/arrows/arrow.model';

@ObjectType()
export class User {
  @Field()
  id: string;
  
  @Field()
  name: string;

  @Field()
  lowercaseName: string;

  @Field()
  routeName: string;

  @Field({ nullable: true })
  email: string;

  @Field()
  description: string;

  @Field()
  color: string;

  @Field()
  palette: string;

  @Field(() => Float)
  balance: number;

  @Field(() => Int)
  replyN: number;

  @Field(() => Float, { nullable: true })
  mapLng: number;

  @Field(() => Float, { nullable: true })
  mapLat: number;

  @Field(() => Float, { nullable: true })
  mapZoom: number;

  @Field()
  isRegisteredWithGoogle: boolean;
  
  @Field({ nullable: true })
  verifyEmailDate: Date;

  @Field()
  isAdmin: boolean;
  
  @Field()
  isReserve: boolean;
  
  @Field()
  activeDate: Date;

  @Field()
  checkAlertsDate: Date;

  @Field({nullable: true})
  createGraphDate: Date;

  @Field({nullable: true})
  navigateGraphDate: Date;

  @Field({ nullable: true })
  togglePaletteDate: Date;

  @Field()
  createDate: Date;

  @Field()
  updateDate: Date;

  @Field({nullable: true})
  deleteDate: Date;
}

@ObjectType()
export class UserAvatar {
  @Field()
  id: string;

  @Field()
  abstractId: string;
  
  @Field()
  name: string;

  @Field()
  color: string;

  @Field(() => Int, { nullable: true })
  x: number;

  @Field(() => Int, { nullable: true })
  y: number;

  @Field()
  activeDate: Date;
}