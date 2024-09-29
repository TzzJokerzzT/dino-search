import { useContext } from "react";
import {
  Card,
  CardHeader,
  Button,
  Badge,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  CardBody,
  Divider,
  Link,
  CardFooter,
} from "@nextui-org/react";

import {
  ArrowIcon,
  GithubIcon,
  LocationIcon,
  OctIcon,
  PeopleIcon,
  PersonIcon,
  RepoIcon,
  TwitterIcon,
  WebsiteIcon,
} from "../icons";

import { Index } from "./index";

import { Context } from "@/Context/ContextProvider";

const ProfileCard = () => {
  const { WEBSITE, CREATE_AT } = Index();

  const {
    login,
    name,
    avatar_url,
    followers,
    following,
    public_repos,
    bio,
    twitter_username,
    location,
    html_url,
    blog,
    CardHeaderBannerRef,
    GitHubUserCardRef,
    error,
  } = useContext(Context);

  return (
    <Card
      ref={GitHubUserCardRef}
      className="w-screen max-w-md gap-4 bg-gradient-to-b from-transparent to-[#899fb8] transition-background"
    >
      <CardHeader //@ts-ignore
        ref={CardHeaderBannerRef}
        className="relative flex h-32 gap-7 rounded-sm p-0"
        style={{
          backgroundImage: "url(/dino.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Badge
          className="-bottom-9 -right-2 h-8 w-8 border-none"
          content={
            <Button
              isIconOnly
              as={Link}
              className="bg-transparent"
              href={html_url}
              radius="full"
              rel="noopener noreferrer"
              target="_blank"
              title="Go to GitHub Profile"
            >
              <GithubIcon className="w-7" />
            </Button>
          }
          placement="bottom-right"
        >
          <Avatar
            isBordered
            className="relative left-5 top-12 h-24 w-24 shrink-0"
            src={avatar_url}
          />
        </Badge>
      </CardHeader>
      <div
        className={`relative right-4 flex self-end rounded-md bg-white/50 dark:bg-black/50`}
      >
        <Popover
          className="rounded-md"
          placement="bottom"
          showArrow={true}
          style={{ borderRadius: "0" }}
        >
          <PopoverTrigger>
            <Button
              isIconOnly
              className="rounded-none bg-transparent"
              title="Public Repositories"
            >
              <RepoIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs">
                <p>
                  Public Repositories:{" "}
                  <span className="text-black dark:text-white">
                    {public_repos}
                  </span>
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Popover className="rounded-md" placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <Button
              isIconOnly
              className="rounded-none bg-transparent"
              title="Followers"
            >
              <PeopleIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs">
                <p>
                  Followers:{" "}
                  <span className="text-black dark:text-white">
                    {followers}
                  </span>
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Popover className="rounded-md" placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <Button
              isIconOnly
              className="rounded-none bg-transparent"
              title="Following"
            >
              <PersonIcon className="w-6 dark:fill-white" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-xs">
                <p>
                  Following:{" "}
                  <span className="text-black dark:text-white">
                    {following}
                  </span>
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <CardBody className="relative left-4 w-[calc(100%-32px)] rounded-md bg-white/50 backdrop-blur-sm transition-background dark:bg-black/50">
        <div className="flex flex-col">
          <h2 className="font-sm-bold text-lg">{name}</h2>
          <strong>{login}</strong>
        </div>
        <Divider className="my-4" />
        {bio && (
          <>
            <div className="flex items-center overflow-hidden">
              <h3 className="text-md mb-2 font-sm-bold font-black capitalize">
                ABOUT ME
              </h3>
            </div>
            <p className="text-balance">{bio}</p>
          </>
        )}
        <div className="mt-2">
          {error?.message ? (
            <p>
              User {error.message} {error.status} - Search another profile
            </p>
          ) : (
            <>
              <h3 className="mb-2 font-black">MEMBER SINCE</h3>
              <div className="flex items-center gap-2">
                <OctIcon className="w-4 fill-black dark:fill-white" />
                <p className="text-md capitalize leading-4">{CREATE_AT}</p>
              </div>{" "}
            </>
          )}
        </div>
        <Divider className="my-4" />
        <ul className="flex flex-col gap-2 text-sm">
          {location && (
            <li className="flex items-center gap-2">
              <LocationIcon className="w-4 fill-black dark:fill-white" />
              <p className="text-balance">{location}</p>
            </li>
          )}
          {blog && (
            <li className="flex items-center gap-2">
              <WebsiteIcon className="w-4 fill-black dark:fill-white" />
              <Link
                isExternal
                showAnchorIcon
                className="text-sm dark:text-white"
                href={blog}
                rel="noopener noreferrer"
                target="_blank"
                underline="hover"
              >
                {WEBSITE.replace("https://", "")}
              </Link>
            </li>
          )}
        </ul>
      </CardBody>
      <Divider className="relative left-4 w-[calc(100%-32px)]" />
      <CardFooter className="overflow-visible px-4 pb-4 pt-0">
        <div className="grid w-full grid-cols-2 gap-4">
          {twitter_username && (
            <Button
              as={Link}
              className="flex items-center justify-between gap-2 break-words rounded-md bg-white/50 p-2 dark:bg-black/50"
              href={`https://twitter.com/${twitter_username}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex w-[calc(100%_-_27px)] items-center gap-2">
                <TwitterIcon className={`shrink-0`} />
                <p className="overflow-hidden truncate text-ellipsis">
                  {twitter_username}
                </p>
              </span>
              <ArrowIcon className={`shrink-0 rotate-45`} />
            </Button>
          )}
          <Button
            as={Link}
            className="flex items-center justify-between gap-2 break-words rounded-md bg-white/50 p-2 dark:bg-black/50"
            href={html_url}
            rel="noopener noreferrer"
            target="_blank"
            variant="solid"
          >
            <span className="flex w-[calc(100%_-_27px)] items-center gap-2">
              <OctIcon className={`w-4 shrink-0`} />
              <p className="overflow-hidden truncate text-ellipsis">{login}</p>
            </span>
            <ArrowIcon className={`shrink-0 rotate-45`} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
