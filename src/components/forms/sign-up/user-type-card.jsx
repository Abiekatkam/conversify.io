"use client ";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, User } from "lucide-react";
import React from "react";

const UserTypeCard = ({
  value,
  title,
  text,
  register,
  userType,
  setUserType,
  iconType,
}) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          "w-full cursor-pointer border-2 shadow-sm",
          userType == value && "border-purple-600"
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                "flex justify-center p-3 border-2",
                userType == value && "border-purple-600"
              )}
            >
              {iconType == "owner" ? (
                <BriefcaseBusiness
                  size={30}
                  className={cn(
                    userType == value ? "text-purple-600" : "text-neutral-500"
                  )}
                />
              ) : (
                <User
                  size={30}
                  className={cn(
                    userType == value ? "text-purple-600" : "text-neutral-500"
                  )}
                />
              )}
            </Card>
            <div className="">
              <CardDescription
                className={cn(
                  "font-bold",
                  userType == value ? "text-purple-600" : "text-neutral-500"
                )}
              >
                {title}
              </CardDescription>
              <CardDescription className="font-light">{text}</CardDescription>
            </div>
          </div>
          <div>
            <Input
              type="radio"
              className="hidden"
              id={value}
              value={value}
              {...register("type", {
                onChange: (event) => setUserType(event.target.value),
              })}
            />
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
