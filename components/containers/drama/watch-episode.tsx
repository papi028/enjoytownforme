import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WatchEpisodes = ({ data, id }: any) => {
  return (
    <div className="h-[40rem] rounded-md border">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="relative flex flex-col rounded p-4">
          {data &&
            data.map((episodes: any) => (
              <Link
                shallow
                key={`episode-${id}-${episodes.id}`}
                href={`/drama/watch/drama-detail/${id}/${episodes.id}`}
              >
                <Button key={data.id}>{episodes.episode}</Button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WatchEpisodes;
