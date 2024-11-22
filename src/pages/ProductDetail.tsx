import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, MessageCircle, Phone } from 'lucide-react';

const products = {
  '1': {
    title: 'Saleskits系统',
    desc: '为企业提供智能销售工具，智代你的客户',
    price: '¥3,999/年',
    features: [
      '智能客户管理',
      '自动化营销工具',
      '数据分析报表',
      '多渠道整合',
      'API集成支持'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  '2': {
    title: '智能销售助手工具',
    desc: '第一代智能销售助手，帮助企业实现自动化',
    price: '¥2,999/年',
    features: [
      'AI对话助手',
      '智能跟进提醒',
      '销售数据分析',
      '客户画像生成',
      '自动化工作流'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
  },
  '3': {
    title: '人员转介绍获客系统',
    desc: '企业专属的人员转介绍系统，帮助企业获客',
    price: '¥1,999/年',
    features: [
      '员工推荐管理',
      '奖励制度设置',
      '转介绍追踪',
      '数据统计分析',
      '自动化结算'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  }
};

function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products[id as keyof typeof products];

  if (!product) return null;

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">返回</span>
        </button>
        <h1 className="text-base font-medium">产品详情</h1>
        <div className="w-5" />
      </header>

      {/* Product Hero */}
      <div className="bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-video object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-500">{product.price}</span>
            <div className="flex items-center text-sm text-gray-500">
              <span>已售 2,356</span>
              <span className="mx-2">•</span>
              <span>好评率 98%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Features */}
      <div className="bg-white mt-2 p-4">
        <h3 className="text-lg font-medium mb-4">产品特点</h3>
        <div className="space-y-4">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <div className="bg-white mt-2">
        <button className="w-full p-4 flex items-center justify-between border-b">
          <span className="text-base">产品详情</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-full p-4 flex items-center justify-between border-b">
          <span className="text-base">用户评价</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
        <button className="w-full p-4 flex items-center justify-between">
          <span className="text-base">常见问题</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto p-4 grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center justify-center gap-1 text-gray-600">
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">在线咨询</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 text-gray-600">
            <Phone className="w-6 h-6" />
            <span className="text-xs">电话咨询</span>
          </button>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-sm">
            立即购买
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;