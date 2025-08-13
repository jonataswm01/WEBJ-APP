import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isPinned, setIsPinned] = useState<boolean>(true);

  useEffect(() => {
    try {
      const savedPinned = localStorage.getItem('sidebar:pinned');
      const savedCollapsed = localStorage.getItem('sidebar:collapsed');
      if (savedPinned !== null) setIsPinned(savedPinned === 'true');
      if (savedCollapsed !== null) setIsCollapsed(savedCollapsed === 'true');
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('sidebar:pinned', String(isPinned));
      localStorage.setItem('sidebar:collapsed', String(isCollapsed));
    } catch {}
  }, [isPinned, isCollapsed]);

  const base = 'flex items-center rounded-md px-3 py-3 text-sm font-medium transition-colors';
  const idle = 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';
  const active = 'bg-gray-100 text-gray-900 ring-1 ring-gray-200';

  const wrapperBase = 'hidden md:flex md:flex-col md:border-r md:border-gray-200 md:bg-white transition-[width] duration-200 ease-in-out overflow-x-hidden';
  const widthClass = (isPinned || !isCollapsed) ? 'md:w-64' : 'md:w-16 md:hover:w-64';
  const paddingClass = 'md:px-3 md:py-4';

  return (
    <aside className={`group ${wrapperBase} ${widthClass} ${paddingClass}`}>
      <div className="px-1">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center min-h-6">
            <div className={`text-lg font-semibold text-gray-900 ${isCollapsed ? 'hidden md:group-hover:block' : 'block'}`}>WEBJ</div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsPinned(p => !p)}
              title={isPinned ? 'Desafixar' : 'Fixar'}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent hover:border-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M14.7 3.3a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4l-3.18 3.18a2 2 0 0 0-.52 1.9l.62 2.48a1 1 0 0 1-1.23 1.22l-2.48-.62a2 2 0 0 0-1.9.52L7.25 21.3a1 1 0 0 1-1.41-1.41l2.3-2.3a2 2 0 0 0 .52-1.9l-.62-2.48a1 1 0 0 1 1.23-1.23l2.48.62a2 2 0 0 0 1.9-.52L14.7 3.3Z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIsCollapsed(c => !c)}
              title={isCollapsed ? 'Expandir' : 'Esconder'}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent hover:border-gray-200"
            >
              {isCollapsed ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M15.78 7.22a.75.75 0 0 1 0 1.06L13.06 11l2.72 2.72a.75.75 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M8.22 16.78a.75.75 0 0 1 0-1.06L10.94 13 8.22 10.28a.75.75 0 1 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <NavLink to="/" end className={({isActive})=>`${base} ${isActive?active:idle}`}>
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-500">
                <path d="M12.97 2.72a1.5 1.5 0 0 0-1.94 0l-7.5 6.43A1.5 1.5 0 0 0 3 10.3V20a2 2 0 0 0 2 2h4.5a.5.5 0 0 0 .5-.5V15a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v6.5a.5.5 0 0 0 .5.5H19a2 2 0 0 0 2-2v-9.7a1.5 1.5 0 0 0-.53-1.15l-7.5-6.43Z" />
              </svg>
              <span className={`${isCollapsed ? 'hidden md:group-hover:inline' : 'inline'} ml-3`}>Início</span>
            </span>
          </NavLink>
          <NavLink to="/contatos" className={({isActive})=>`${base} ${isActive?active:idle}`}>
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-500">
                <path d="M7.5 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM3 19.5A6.75 6.75 0 0 1 9.75 12.75h4.5A6.75 6.75 0 0 1 21 19.5v.75A.75.75 0 0 1 20.25 21H3.75A.75.75 0 0 1 3 20.25V19.5Z" />
              </svg>
              <span className={`${isCollapsed ? 'hidden md:group-hover:inline' : 'inline'} ml-3`}>Contatos</span>
            </span>
          </NavLink>
          <NavLink to="/grupos" className={({isActive})=>`${base} ${isActive?active:idle}`}>
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-500">
                <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5V9H3V7.5ZM3 10.5h18V16.5A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5V10.5Z" />
              </svg>
              <span className={`${isCollapsed ? 'hidden md:group-hover:inline' : 'inline'} ml-3`}>Grupos</span>
            </span>
          </NavLink>
          <NavLink to="/configuracoes" className={({isActive})=>`${base} ${isActive?active:idle}`}>
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-500">
                <path d="M10.325 4.317a1.75 1.75 0 0 1 3.35 0l.142.568a1.75 1.75 0 0 0 2.37 1.23l.54-.216a1.75 1.75 0 0 1 2.265 2.265l-.216.54a1.75 1.75 0 0 0 1.23 2.37l.568.142a1.75 1.75 0 0 1 0 3.35l-.568.142a1.75 1.75 0 0 0-1.23 2.37l.216.54a1.75 1.75 0 0 1-2.265 2.265l-.54-.216a1.75 1.75 0 0 0-2.37 1.23l-.142.568a1.75 1.75 0 0 1-3.35 0l-.142-.568a1.75 1.75 0 0 0-2.37-1.23l-.54.216a1.75 1.75 0 0 1-2.265-2.265l.216-.54a1.75 1.75 0 0 0-1.23-2.37l-.568-.142a1.75 1.75 0 0 1 0-3.35l.568-.142a1.75 1.75 0 0 0 1.23-2.37l-.216-.54A1.75 1.75 0 0 1 7.85 5.899l.54.216a1.75 1.75 0 0 0 2.37-1.23l.142-.568ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
              <span className={`${isCollapsed ? 'hidden md:group-hover:inline' : 'inline'} ml-3`}>Configurações</span>
            </span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

function MobileTopbar() {
  return (
    <div className="md:hidden sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-base font-semibold text-gray-900">WEBJ</span>
      </div>
    </div>
  );
}

function PageInicio() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Início</h1>
        <p className="mt-1 text-sm text-gray-600">Visão geral do seu dashboard.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Área de gráfico 1 (placeholder)</div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Área de gráfico 2 (placeholder)</div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Área de gráfico 3 (placeholder)</div>
      </section>
    </div>
  );
}

function PageContatos() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Contatos</h1>
        <p className="mt-1 text-sm text-gray-600">Gerencie seus contatos.</p>
      </header>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Lista de contatos (estrutura básica). Em breve: filtros, busca e ações.</div>
    </div>
  );
}

function PageGrupos() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Grupos</h1>
        <p className="mt-1 text-sm text-gray-600">Organize seus grupos.</p>
      </header>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">Lista de grupos (estrutura básica). Em breve: criação, edição e membros.</div>
    </div>
  );
}

function PageConfiguracoes() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Configurações</h1>
        <p className="mt-1 text-sm text-gray-600">Preferências do aplicativo.</p>
      </header>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <h2 className="text-sm font-medium text-gray-900">Tema</h2>
            <p className="mt-1 text-sm text-gray-600">Claro (padrão minimalista)</p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4">
            <h2 className="text-sm font-medium text-gray-900">Idioma</h2>
            <p className="mt-1 text-sm text-gray-600">Português (Brasil)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex bg-white">
        <MobileTopbar />
        <Sidebar />
        <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 bg-white">
          <Routes>
            <Route path="/" element={<PageInicio />} />
            <Route path="/contatos" element={<PageContatos />} />
            <Route path="/grupos" element={<PageGrupos />} />
            <Route path="/configuracoes" element={<PageConfiguracoes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
