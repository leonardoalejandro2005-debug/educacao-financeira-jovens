export default function FinancialEducationProject() {
  return (
    <div>
      <h1>Educação Financeira para Jovens</h1>
      <p>Projeto educativo para conscientização financeira.</p>
    </div>
}
export default function FinancialEducationProject() {
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Questionário de Educação Financeira
          </h2>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-5 bg-gray-50"
              >
                <p className="font-medium text-lg text-gray-800 mb-4">
                  {index + 1}. {question}
                </p>

                <div className="grid md:grid-cols-2 gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl">
                    Sim
                  </button>

                  <button className="bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl">
                    Não
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Relato de Participante
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              “Depois da oficina, comecei a entender melhor como organizar meu
              dinheiro. Aprendi a controlar meus gastos, evitar compras por
              impulso e guardar uma parte do dinheiro para meus objetivos.”
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Resultados Esperados
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li>📈 Maior consciência financeira</li>
              <li>💰 Melhor organização do dinheiro</li>
              <li>🛒 Redução de compras impulsivas</li>
              <li>📊 Desenvolvimento de planejamento financeiro</li>
              <li>🏦 Incentivo ao hábito de economizar</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projeto de Extensão — Educação Financeira para Jovens
          </h2>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Software educativo desenvolvido para conscientizar jovens sobre a
            importância do planejamento financeiro e da responsabilidade no uso
            do dinheiro.
          </p>
        </div>
      </div>
    </div>
  );
);
}
