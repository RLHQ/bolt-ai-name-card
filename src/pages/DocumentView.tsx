import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Eye, ThumbsUp } from 'lucide-react';

const documents = {
  '1': {
    name: '加推Saleskits产品介绍.pptx',
    date: '2024-03-15',
    size: '2.5MB',
    views: 1250,
    likes: 328,
    preview: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  '2': {
    name: '智能销售助手工具.pptx',
    date: '2024-03-14',
    size: '1.8MB',
    views: 856,
    likes: 245,
    preview: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  '3': {
    name: '人员转介绍获客系统.pdf',
    date: '2024-03-13',
    size: '3.2MB',
    views: 1520,
    likes: 412,
    preview: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'
  }
};

function DocumentView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const doc = documents[id as keyof typeof documents];

  if (!doc) return null;

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">返回</span>
        </button>
        <h1 className="text-base font-medium">文件详情</h1>
        <div className="w-5" />
      </header>

      {/* Document Preview */}
      <div className="bg-white p-4">
        <img
          src={doc.preview}
          alt="Document Preview"
          className="w-full aspect-video object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{doc.name}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{doc.date}</span>
          <span className="mx-2">•</span>
          <span>{doc.size}</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{doc.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{doc.likes}</span>
          </div>
        </div>
      </div>

      {/* Document Pages */}
      <div className="bg-white mt-2 p-4">
        <h3 className="text-base font-medium mb-4">文件预览</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((page) => (
            <div key={page} className="border rounded-lg overflow-hidden">
              <img
                src={doc.preview}
                alt={`Page ${page}`}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto p-4 grid grid-cols-3 gap-3">
          <button className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-full col-span-2">
            <Download className="w-5 h-5" />
            <span>下载文件</span>
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-full">
            <Share2 className="w-5 h-5" />
            <span>分享</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentView;