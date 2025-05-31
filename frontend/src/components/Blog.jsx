import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

function Blog() {
  return (
    <div className="p-10">
      <div className="flex flex-col items-center flex-wrap-reverse md:flex-row justify-center gap-10">
        <div>
          <Card className="w-[350px] shadow-lg rounded-2xl overflow-hidden">
            {/* Blog Image */}
            <img
              src="https://source.unsplash.com/random/600x300?tech"
              alt="Blog Thumbnail"
              className="w-full h-44 object-cover"
            />

            <CardHeader>
              <CardTitle className="text-xl">
                Exploring the Future of Web Development
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-600">
                Dive into emerging trends and tools shaping modern web
                development. From AI to edge computing, get ahead of the curve!
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                May 31, 2025
              </span>
              <button className="text-sm text-blue-600 hover:underline">
                Read more →
              </button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="w-[350px] shadow-lg rounded-2xl overflow-hidden">
            {/* Blog Image */}
            <img
              src="https://source.unsplash.com/random/600x300?tech"
              alt="Blog Thumbnail"
              className="w-full h-44 object-cover"
            />

            <CardHeader>
              <CardTitle className="text-xl">
                Exploring the Future of Web Development
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-600">
                Dive into emerging trends and tools shaping modern web
                development. From AI to edge computing, get ahead of the curve!
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                May 31, 2025
              </span>
              <button className="text-sm text-blue-600 hover:underline">
                Read more →
              </button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="w-[350px] shadow-lg rounded-2xl overflow-hidden">
            {/* Blog Image */}
            <img
              src="https://source.unsplash.com/random/600x300?tech"
              alt="Blog Thumbnail"
              className="w-full h-44 object-cover"
            />

            <CardHeader>
              <CardTitle className="text-xl">
                Exploring the Future of Web Development
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-600">
                Dive into emerging trends and tools shaping modern web
                development. From AI to edge computing, get ahead of the curve!
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                May 31, 2025
              </span>
              <button className="text-sm text-blue-600 hover:underline">
                Read more →
              </button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="w-[350px] shadow-lg rounded-2xl overflow-hidden">
            {/* Blog Image */}
            <img
              src="https://source.unsplash.com/random/600x300?tech"
              alt="Blog Thumbnail"
              className="w-full h-44 object-cover"
            />

            <CardHeader>
              <CardTitle className="text-xl">
                Exploring the Future of Web Development
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-600">
                Dive into emerging trends and tools shaping modern web
                development. From AI to edge computing, get ahead of the curve!
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                May 31, 2025
              </span>
              <button className="text-sm text-blue-600 hover:underline">
                Read more →
              </button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="w-[350px] shadow-lg rounded-2xl overflow-hidden">
            {/* Blog Image */}
            <img
              src="https://source.unsplash.com/random/600x300?tech"
              alt="Blog Thumbnail"
              className="w-full h-44 object-cover"
            />

            <CardHeader>
              <CardTitle className="text-xl">
                Exploring the Future of Web Development
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-600">
                Dive into emerging trends and tools shaping modern web
                development. From AI to edge computing, get ahead of the curve!
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                May 31, 2025
              </span>
              <button className="text-sm text-blue-600 hover:underline">
                Read more →
              </button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="w-[350px] shadow-lg rounded-2xl overflow-hidden">
            {/* Blog Image */}
            <img
              src="https://source.unsplash.com/random/600x300?tech"
              alt="Blog Thumbnail"
              className="w-full h-44 object-cover"
            />

            <CardHeader>
              <CardTitle className="text-xl">
                Exploring the Future of Web Development
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-600">
                Dive into emerging trends and tools shaping modern web
                development. From AI to edge computing, get ahead of the curve!
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                May 31, 2025
              </span>
              <button className="text-sm text-blue-600 hover:underline">
                Read more →
              </button>
              <Button>Secondary</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Blog;
