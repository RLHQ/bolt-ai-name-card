import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, QrCode, Download } from 'lucide-react';

function ShareCard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">返回</span>
        </button>
        <h1 className="text-base font-medium">分享名片</h1>
        <div className="w-5" />
      </header>

      {/* Card Preview */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200"
              alt="Profile"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">客服经理Anna</h2>
              <p className="text-gray-600 text-sm mt-1">jialu365@jd.com</p>
              <p className="text-gray-500 text-xs mt-2">广东省深圳市南山区第一代表处</p>
            </div>
          </div>
          <div className="border-t pt-6">
            <div className="aspect-square w-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
              <QrCode className="w-24 h-24 text-gray-400" />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">扫描二维码查看电子名片</p>
          </div>
        </div>
      </div>

      {/* Share Options */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto p-4 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-full">
            <Share2 className="w-5 h-5" />
            <span>分享给好友</span>
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-full">
            <Download className="w-5 h-5" />
            <span>保存图片</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareCard;