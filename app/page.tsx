import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className="">
        Home
      </h1>
      

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptates a? Velit ipsum, impedit quam veritatis porro et reprehenderit ullam incidunt ex vel beatae rerum alias, quisquam placeat temporibus provident.
      </div>
      <img className="w-[50em] rounded-4xl m-2" 
      src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/07-23/How+Much+Does+It+Cost+to+Have+a+Cat+_+ASPCA+Pet+Insurance+_+black+cat+with+yellow+eyes+peeking+out-min.jpg" alt="cat" />

      <Image className= "w-[50em] rounded-4xl m-2" 
      src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/07-23/How+Much+Does+It+Cost+to+Have+a+Cat+_+ASPCA+Pet+Insurance+_+black+cat+with+yellow+eyes+peeking+out-min.jpg" 
      width={300}
      height={300}
      alt="cat"
      />
    </div>
    
  )
}
