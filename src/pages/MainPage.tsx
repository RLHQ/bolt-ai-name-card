import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, FileText, ChevronRight, ThumbsUp, Users } from 'lucide-react';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span className="text-sm">个人中心</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">客服经理Anna</span>
          <button className="w-8 h-8 flex items-center justify-center">•••</button>
        </div>
      </header>

      {/* Profile Card */}
      <div className="bg-white p-4 mb-2">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200"
            alt="Profile"
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-1">客服经理Anna</h2>
            <p className="text-gray-600 text-sm mb-2">jialu365@jd.com</p>
            <p className="text-gray-500 text-xs">广东省深圳市南山区第一代表处</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button 
            onClick={() => navigate('/share')}
            className="flex-1 bg-blue-500 text-white py-2.5 rounded-full text-sm active:bg-blue-600 transition-colors"
          >
            分享名片
          </button>
          <button className="flex-1 border border-gray-300 py-2.5 rounded-full text-sm active:bg-gray-50 transition-colors">
            存入手机通讯录
          </button>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=32&h=32`}
                alt={`User ${i}`}
                className="w-7 h-7 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">27.5W人浏览</span>
          <div className="flex items-center gap-1 ml-auto">
            <ThumbsUp className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">1150</span>
          </div>
        </div>
      </div>

      {/* Business Documents */}
      <div className="bg-white p-4 mb-2">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold">企业文件</h3>
          <button className="text-sm text-gray-500 flex items-center p-2 -mr-2">
            更多
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {[
            { id: '1', name: '加推Saleskits产品介绍.pptx' },
            { id: '2', name: '智能销售助手工具.pptx' },
            { id: '3', name: '人员转介绍获客系统.pdf' }
          ].map((doc) => (
            <div key={doc.id} className="border rounded-lg p-3 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm truncate">{doc.name}</p>
              </div>
              <button 
                onClick={() => navigate(`/document/${doc.id}`)}
                className="px-4 py-1.5 text-sm text-blue-500 border border-blue-500 rounded-full active:bg-blue-50"
              >
                查看
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="bg-white p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold">推荐产品</h3>
          <button className="text-sm text-gray-500 flex items-center p-2 -mr-2">
            更多
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {[
            {
              id: '1',
              title: 'Saleskits系统',
              desc: '为企业提供智能销售工具，智代你的客户'
            },
            {
              id: '2',
              title: '智能销售助手工具',
              desc: '第一代智能销售助手，帮助企业实现自动化'
            },
            {
              id: '3',
              title: '人员转介绍获客系统',
              desc: '企业专属的人员转介绍系统，帮助企业获客'
            }
          ].map((product) => (
            <button 
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex items-center gap-4 w-full active:bg-gray-50 p-2 -mx-2 rounded-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-medium text-sm">{product.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{product.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto flex justify-around py-2">
          {[
            { icon: <FileText className="w-6 h-6" />, label: '产品' },
            { icon: <Phone className="w-6 h-6" />, label: '电话咨询' },
            { icon: <MessageCircle className="w-6 h-6" />, label: '在线咨询' },
            { icon: <Mail className="w-6 h-6" />, label: '邮件咨询' },
            { icon: <MapPin className="w-6 h-6" />, label: '公司地址' }
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center px-2 py-1 active:bg-gray-50 rounded-lg">
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;