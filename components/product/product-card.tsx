import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Image from "next/image";

type ProductCardProps = {
  productURL?: string;
  imageURL?: string;
  title?: string;
  creatorURL?: string;
  creatorName?: string;
  creatorAvatarURL?: string;
  price?: string;
  isSale?: boolean;
  salePercentage?: number;
  salePrice?: string;
  info?: string;
};

export default function ProductCard({
  productURL = "/quick-baker",
  imageURL = "https://d1231c29xbpffx.cloudfront.net/store/product/182049/image/ab1b141694124c4a634571c382546e52.png?Expires=1706486632&Signature=LLg2C85A6xfub6iUneDl0hYfhvcOZcoSxYvFA7IMrAn9VmdTdsmItLYtKcjJ--zdy9bW2CkaANLBs8j8-bjZot6cwRXdXCfYQ-h8fHbOeA3hjF5b-EFsfy5t0aC54-wy6QCOcOeka8axx5AIu8cOW21kuD7tuguG4SGLH8cl~5zC7xbvvMFMkHrnnk~52kJvw3UVtlrP~6h5tR1lgfucAMGcWL97CkxhG-gY~KYSVIfYrI-DWrLWmFC~g~drqTj6rXn87UhSG7BT2faV943RWUB3v6kagD6DaHaQBC5NBQ2A3AYAKjIRb0kyqr9S066hkaAauQzuAKMZewYIKbnZmQ__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ",
  title = "Product Name",
  creatorURL = "https://blendermarket.com/creators/b3dhub",
  creatorName = "B3dHub",
  creatorAvatarURL = "https://d1231c29xbpffx.cloudfront.net/store/user/5896990/avatar/c189f1ef1d127a0a107f540650908ee2.png?Expires=1714153528&Signature=VBl3XI~bOX1dqREsN58tMgLgjBJUEFw0ez-98OqrfzDc0BHWT8j1ex-Y3fBTkNnnkYXwumn2U-Eo4eoGvjGQze6JzBVZO-mPt7S4EV67tspIjuIEzL9dRVwXNx-GMg4X~BxSsnSNVhV-EkN-SN4IMZfEjfH1dutDiyvANmQ15tYnhSLXpzRAstCrhjgC2ka7b9sWDksbHrkK59RRO0XXCCK-pndD3xz8xf9Ng70-V8jTMIurxnedRzeZwstsexPtG~aUql3aBR1IqR7ZbFEmH2aZIS2YCGT6GpGoY6t7ikalOH5XOlVAoJBfU3z3EulKLZffUZfaViDHIBGoFJvQZg__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ",
  price = "$10",
  isSale = false,
  salePercentage = 10,
  salePrice = "$9",
  info,
}: ProductCardProps) {
  return (
    <div className="relative border rounded-xl shadow-xl hover:bg-muted">
      <Link href={productURL} passHref={true}>
        <div className="relative overflow-hidden rounded-t-xl h-[200px]">
          <Image
            src={imageURL}
            alt=""
            width={400}
            height={200}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
          {isSale && (
            <Badge variant="default" className="absolute top-1 -right-1 shadow-md">
              Sale {salePercentage}%
            </Badge>
          )}
          {info && (
            <Badge variant="secondary" className="absolute bottom-1 right-1">
              {info}
            </Badge>
          )}
        </div>
        <div className="space-y-2 text-sm p-4">
          <h2 className="font-medium line-clamp-1">{title}</h2>
          <div className="flex min-h-7 items-center justify-between flex-row-reverse">
            <div className="flex items-center space-x-2">
              {isSale ? (
                <>
                  <h3 className="text-muted-foreground line-through">{price}</h3>
                  <h3>{salePrice}</h3>
                </>
              ) : (
                <h3>{price}</h3>
              )}
            </div>
          </div>
        </div>
      </Link>
      <Link
        href={creatorURL}
        passHref={true}
        className="absolute left-4 bottom-4 text-xs hover:underline hover:text-primary"
      >
        <div className="flex items-center space-x-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src={creatorAvatarURL} />
            <AvatarFallback>{creatorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <p>{creatorName}</p>
        </div>
      </Link>
    </div>
  );
}
