// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          关于我
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            自我评价
          </p>
          <p className="text-gray-300 text-md lg:text-lg">
            1. 拥有八年 Java 开发经验，其中包括三年以上系统架构设计经验，以及两年以上的团队管理经验。<br />
            2. 具备分布式、高并发、高可用、大数据量系统的架构设计和研发经验。<br />
            3. 拥有扎实的技术功底，能够对 dubbo、spring cloud、spring、netty、mybatis、kafka 等开源框架进行源码级别的研究。<br />
            4. 对 DDD（领域驱动设计）有一定的理解和实践经验，能够在实际的系统架构和开发中进行应用。<br />
            5. 具有持续学习的人生理念，能够不断更新知识和技能，以适应快速发展的技术环境。
        </p>
      </div>
      <div className="flex justify-center order-1 lg:order-2">
        <Image
          src={personalData.profile}
          width={280}
          height={280}
          alt="Luva.Hua"
          className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
    </div >
  );
};

export default AboutSection;